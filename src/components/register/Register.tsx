"use client";

import React, { useState } from 'react';
import PageBanner from '@/components/common/PageBanner';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  Building02Icon,
  CheckmarkCircle02Icon,
  ArrowRight02Icon,
  Mail02Icon,
  UserGroup02Icon,
  Add01Icon,
  Delete02Icon,
  User02Icon,
  Tick01Icon,
} from '@hugeicons/core-free-icons';

export type TeamType = 'U-11 Boys' | 'U-11 Girls' | 'U-9 Boys' | 'U-9 Girls';

export interface StudentAthlete {
  id: string;
  name: string;
  dob: string;
  classRoll: string;
  teamType: TeamType;
  position: string;
  guardianPhone: string;
}

export default function Register() {
  // Registration Flow Step: 'club-form' -> 'email-sent' -> 'student-form'
  const [step, setStep] = useState<'club-form' | 'email-sent' | 'student-form'>('club-form');
  
  // Step 1: Club Registration Form State
  const [formData, setFormData] = useState({
    clubName: '',
    zone: 'Central Delhi Zone',
    schoolName: '',
    contactPerson: '',
    phone: '',
    email: '',
    selectedTeamTypes: ['U-11 Boys', 'U-11 Girls'] as TeamType[],
  });

  // Step 2: Student Athlete Roster State
  const [students, setStudents] = useState<StudentAthlete[]>([
    {
      id: '1',
      name: 'Aarav Sharma',
      dob: '2015-04-12',
      classRoll: 'Class 5B (Roll 14)',
      teamType: 'U-11 Boys',
      position: 'Forward',
      guardianPhone: '+91 98765 43210',
    },
    {
      id: '2',
      name: 'Ananya Verma',
      dob: '2015-08-22',
      classRoll: 'Class 5A (Roll 08)',
      teamType: 'U-11 Girls',
      position: 'Midfielder',
      guardianPhone: '+91 98123 45678',
    },
  ]);

  const [activeTeamFilter, setActiveTeamFilter] = useState<TeamType | 'All'>('All');

  // New Student Entry Input State
  const [newStudent, setNewStudent] = useState({
    name: '',
    dob: '',
    classRoll: '',
    teamType: 'U-11 Boys' as TeamType,
    position: 'Forward',
    guardianPhone: '',
  });

  const [rosterSubmitted, setRosterSubmitted] = useState(false);

  // Handle Team Type Checkbox Toggle
  const handleTeamTypeToggle = (type: TeamType) => {
    setFormData((prev) => {
      const exists = prev.selectedTeamTypes.includes(type);
      if (exists) {
        if (prev.selectedTeamTypes.length === 1) return prev; // Keep at least one selected
        return { ...prev, selectedTeamTypes: prev.selectedTeamTypes.filter((t) => t !== type) };
      } else {
        return { ...prev, selectedTeamTypes: [...prev.selectedTeamTypes, type] };
      }
    });
  };

  // Step 1 Submit: Register Club & Trigger Email Simulation
  const handleClubSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.selectedTeamTypes.length === 0) {
      alert('Please select at least one team type for registration.');
      return;
    }
    // Automatically set default student team type to first chosen team type
    setNewStudent((prev) => ({ ...prev, teamType: formData.selectedTeamTypes[0] }));
    setStep('email-sent');
  };

  // Step 2 Add Student Athlete to List
  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStudent.name || !newStudent.dob || !newStudent.classRoll) {
      alert('Please fill out student name, DOB, and class roll number.');
      return;
    }

    const athlete: StudentAthlete = {
      id: Date.now().toString(),
      name: newStudent.name,
      dob: newStudent.dob,
      classRoll: newStudent.classRoll,
      teamType: newStudent.teamType,
      position: newStudent.position,
      guardianPhone: newStudent.guardianPhone || formData.phone,
    };

    setStudents((prev) => [...prev, athlete]);
    setNewStudent({
      name: '',
      dob: '',
      classRoll: '',
      teamType: formData.selectedTeamTypes[0],
      position: 'Forward',
      guardianPhone: '',
    });
  };

  // Remove Student Athlete from List
  const handleRemoveStudent = (id: string) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  const filteredStudents = activeTeamFilter === 'All'
    ? students
    : students.filter((s) => s.teamType === activeTeamFilter);

  return (
    <main className="w-full bg-white min-h-screen">
      <PageBanner
        title="CLUB & ATHLETE REGISTRATION"
        watermarkText="REGISTRATION"
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Registration' },
        ]}
      />

      <section className="w-full py-12 px-4 sm:px-8 lg:py-20 lg:px-16 bg-slate-50/70">
        <div className="max-w-[1000px] mx-auto flex flex-col gap-8">
          
          {/* Progress Indicator Header */}
          <div className="w-full bg-white rounded-2xl p-4 border border-gray-200/80 shadow-2xs flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs font-dm-sans ${
                step === 'club-form' ? 'bg-orange text-white' : 'bg-green-100 text-green-700'
              }`}>
                1
              </div>
              <span className={`font-satoshi font-bold text-sm sm:text-base ${
                step === 'club-form' ? 'text-navy' : 'text-gray-500'
              }`}>
                Club Registration
              </span>
            </div>

            <div className="h-0.5 flex-1 bg-gray-200 mx-2 hidden sm:block" />

            <div className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs font-dm-sans ${
                step === 'email-sent' ? 'bg-orange text-white' : step === 'student-form' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-400'
              }`}>
                2
              </div>
              <span className={`font-satoshi font-bold text-sm sm:text-base ${
                step !== 'club-form' ? 'text-navy' : 'text-gray-400'
              }`}>
                Athlete Roster Entry
              </span>
            </div>
          </div>

          {/* ──────── STEP 1: CLUB REGISTRATION FORM ──────── */}
          {step === 'club-form' && (
            <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-gray-200/80 shadow-md">
              <form onSubmit={handleClubSubmit} className="flex flex-col gap-7">
                
                {/* Header info */}
                <div className="flex flex-col gap-2 border-b border-gray-100 pb-5">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange/10 border border-orange/20 self-start">
                    <HugeiconsIcon icon={Building02Icon} size={14} color="#F58220" />
                    <span className="text-xs font-bold font-dm-sans text-orange uppercase tracking-wider">
                      STEP 1: OFFICIAL CLUB REGISTRATION
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy font-satoshi">
                    Register Your Club
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600 font-dm-sans leading-relaxed">
                    Submit your club details and choose participating team categories. Upon submission, an automated Student Athlete Verification Form will be dispatched to your registered email address.
                  </p>
                </div>

                {/* Basic Club Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider font-dm-sans">
                      Club Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Central MCD Primary Strikers"
                      value={formData.clubName}
                      onChange={(e) => setFormData({ ...formData, clubName: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm font-dm-sans focus:outline-none focus:border-purple"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider font-dm-sans">
                      MCD Zone / Region *
                    </label>
                    <select
                      value={formData.zone}
                      onChange={(e) => setFormData({ ...formData, zone: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm font-dm-sans focus:outline-none focus:border-purple cursor-pointer"
                    >
                      <option value="Central Delhi Zone">Central Delhi Zone</option>
                      <option value="South Delhi Zone">South Delhi Zone</option>
                      <option value="North Delhi Zone">North Delhi Zone</option>
                      <option value="East Delhi Zone">East Delhi Zone</option>
                      <option value="West Delhi Zone">West Delhi Zone</option>
                      <option value="Karol Bagh Zone">Karol Bagh Zone</option>
                      <option value="Rohini Zone">Rohini Zone</option>
                      <option value="Shahdara Zone">Shahdara Zone</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider font-dm-sans">
                     Address *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Primary School Campus, Defence Colony, New Delhi"
                    value={formData.schoolName}
                    onChange={(e) => setFormData({ ...formData, schoolName: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm font-dm-sans focus:outline-none focus:border-purple"
                  />
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider font-dm-sans">
                      Representative *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm font-dm-sans focus:outline-none focus:border-purple"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider font-dm-sans">
                      Contact Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm font-dm-sans focus:outline-none focus:border-purple"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider font-dm-sans">
                      Club Registration Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="club@mcdschool.edu.in"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm font-dm-sans focus:outline-none focus:border-purple"
                    />
                  </div>
                </div>

                {/* 🎯 TEAM CATEGORY SELECTION DROPDOWN / CHECKBOXES */}
                <div className="flex flex-col gap-3 p-5 rounded-2xl bg-purple-50/70 border border-purple-100">
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-bold text-navy font-satoshi flex items-center gap-2">
                      <HugeiconsIcon icon={UserGroup02Icon} size={18} color="#8A38F5" />
                      <span>Select Participating Team Categories (Required) *</span>
                    </label>
                    <p className="text-xs text-gray-600 font-dm-sans">
                      Choose which divisions your club will field teams in for the 2026 MCD Mini League tournament.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-2">
                    {(['U-11 Boys', 'U-11 Girls', 'U-9 Boys', 'U-9 Girls'] as TeamType[]).map((teamType) => {
                      const isSelected = formData.selectedTeamTypes.includes(teamType);
                      return (
                        <button
                          key={teamType}
                          type="button"
                          onClick={() => handleTeamTypeToggle(teamType)}
                          className={`flex items-center justify-between p-3.5 rounded-xl border text-xs sm:text-sm font-bold font-satoshi transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-purple text-white border-purple shadow-sm'
                              : 'bg-white text-navy border-gray-200 hover:border-purple/40'
                          }`}
                        >
                          <span>{teamType}</span>
                          <span className={`w-4 h-4 rounded-full flex items-center justify-center ${
                            isSelected ? 'bg-white text-purple' : 'border border-gray-300'
                          }`}>
                            {isSelected && <HugeiconsIcon icon={Tick01Icon} size={12} />}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="mt-2 text-xs text-purple font-semibold font-dm-sans">
                    Selected Divisions: {formData.selectedTeamTypes.join(', ')}
                  </div>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-orange hover:bg-orange/90 text-white font-extrabold font-satoshi text-base sm:text-lg rounded-2xl transition-all duration-300 shadow-md flex items-center justify-center gap-2.5 cursor-pointer mt-2"
                >
                  <span>Submit Club Registration &amp; Send Student Form Link</span>
                  <HugeiconsIcon icon={ArrowRight02Icon} size={20} />
                </button>
              </form>
            </div>
          )}

          {/* ──────── STEP 2: SIMULATED EMAIL & STUDENT DATA FORM ──────── */}
          {(step === 'email-sent' || step === 'student-form') && (
            <div className="flex flex-col gap-8">
              
              {/* Automated Email Confirmation Banner */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-green-200/80 shadow-md flex flex-col gap-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center shrink-0">
                    <HugeiconsIcon icon={Mail02Icon} size={24} />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-green-100 text-green-800 text-xs font-bold font-dm-sans self-start">
                      <HugeiconsIcon icon={CheckmarkCircle02Icon} size={14} />
                      <span>Registration Email Dispatched</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-navy font-satoshi mt-1">
                      Student Registration Form Sent to {formData.email || 'your email'}
                    </h3>
                    <p className="text-sm text-gray-600 font-dm-sans leading-relaxed">
                      An automated Student Data Submission Link for <strong>{formData.clubName || 'Your Club'}</strong> has been sent to <strong>{formData.email}</strong> for filling student athlete details across your selected divisions: <strong>{formData.selectedTeamTypes.join(', ')}</strong>.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-2xl bg-slate-50 border border-gray-100 text-xs font-dm-sans text-gray-600">
                  <span>Registered Zone: <strong>{formData.zone}</strong></span>
                  <span>Contact Representative: <strong>{formData.contactPerson} ({formData.phone})</strong></span>
                  <button
                    onClick={() => setStep('club-form')}
                    className="text-purple font-bold hover:underline cursor-pointer"
                  >
                    Edit Club Info
                  </button>
                </div>
              </div>

              {/* Student Athlete Entry Form Container */}
              <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/80 shadow-md flex flex-col gap-8">
                
                <div className="flex flex-col gap-2 border-b border-gray-100 pb-5">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-50 border border-purple-100 self-start">
                    <HugeiconsIcon icon={User02Icon} size={14} color="#8A38F5" />
                    <span className="text-xs font-bold font-dm-sans text-purple uppercase tracking-wider">
                      STEP 2: STUDENT ATHLETE DATA FORM
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-navy font-satoshi">
                    Fill Student Athlete Details ({formData.clubName || 'Club Roster'})
                  </h2>
                  <p className="text-sm text-gray-600 font-dm-sans">
                    Add player details for your selected team categories below. Student data will be verified for age proof and GMS Digital Player IDs.
                  </p>
                </div>

                {/* Add Student Entry Form */}
                <form onSubmit={handleAddStudent} className="flex flex-col gap-5 p-6 rounded-2xl bg-slate-50 border border-gray-200/80">
                  <h3 className="font-satoshi font-bold text-base text-navy flex items-center gap-2">
                    <HugeiconsIcon icon={Add01Icon} size={18} color="#F58220" />
                    <span>Add New Student Athlete Entry</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-bold text-gray-700 uppercase font-dm-sans">
                        Student Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rohan Verma"
                        value={newStudent.name}
                        onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-dm-sans focus:outline-none focus:border-purple"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-bold text-gray-700 uppercase font-dm-sans">
                        Date of Birth (DOB) *
                      </label>
                      <input
                        type="date"
                        required
                        value={newStudent.dob}
                        onChange={(e) => setNewStudent({ ...newStudent, dob: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-dm-sans focus:outline-none focus:border-purple cursor-pointer"
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-bold text-gray-700 uppercase font-dm-sans">
                        Class &amp; Roll Number *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Class 5A (Roll 12)"
                        value={newStudent.classRoll}
                        onChange={(e) => setNewStudent({ ...newStudent, classRoll: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-dm-sans focus:outline-none focus:border-purple"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {/* Team Category Dropdown */}
                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-bold text-gray-700 uppercase font-dm-sans">
                        Team Division Category *
                      </label>
                      <select
                        value={newStudent.teamType}
                        onChange={(e) => setNewStudent({ ...newStudent, teamType: e.target.value as TeamType })}
                        className="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-dm-sans focus:outline-none focus:border-purple cursor-pointer font-bold text-navy"
                      >
                        {formData.selectedTeamTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-bold text-gray-700 uppercase font-dm-sans">
                        Playing Position *
                      </label>
                      <select
                        value={newStudent.position}
                        onChange={(e) => setNewStudent({ ...newStudent, position: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-dm-sans focus:outline-none focus:border-purple cursor-pointer"
                      >
                        <option value="Forward">Forward / Striker</option>
                        <option value="Midfielder">Midfielder</option>
                        <option value="Defender">Defender</option>
                        <option value="Goalkeeper">Goalkeeper</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="text-xs font-bold text-gray-700 uppercase font-dm-sans">
                        Parent / Guardian Phone
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 00000"
                        value={newStudent.guardianPhone}
                        onChange={(e) => setNewStudent({ ...newStudent, guardianPhone: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-white border border-gray-200 rounded-xl text-sm font-dm-sans focus:outline-none focus:border-purple"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="self-end px-6 py-3 bg-purple hover:bg-purple/90 text-white font-bold font-satoshi text-sm rounded-xl transition-all cursor-pointer flex items-center gap-2 shadow-xs"
                  >
                    <HugeiconsIcon icon={Add01Icon} size={16} />
                    <span>Add Student Athlete to Roster</span>
                  </button>
                </form>

                {/* Filter & Registered Students Roster List */}
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <h3 className="font-satoshi font-extrabold text-xl text-navy">
                      Registered Student Roster ({students.length} Athletes)
                    </h3>

                    {/* Team Filter Tabs */}
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <button
                        onClick={() => setActiveTeamFilter('All')}
                        className={`px-3 py-1 rounded-lg text-xs font-bold font-satoshi cursor-pointer ${
                          activeTeamFilter === 'All'
                            ? 'bg-navy text-white'
                            : 'bg-slate-100 text-gray-600 hover:bg-slate-200'
                        }`}
                      >
                        All ({students.length})
                      </button>
                      {formData.selectedTeamTypes.map((t) => {
                        const count = students.filter((s) => s.teamType === t).length;
                        return (
                          <button
                            key={t}
                            onClick={() => setActiveTeamFilter(t)}
                            className={`px-3 py-1 rounded-lg text-xs font-bold font-satoshi cursor-pointer ${
                              activeTeamFilter === t
                                ? 'bg-purple text-white'
                                : 'bg-slate-100 text-gray-600 hover:bg-slate-200'
                            }`}
                          >
                            {t} ({count})
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Roster Table */}
                  {filteredStudents.length > 0 ? (
                    <div className="w-full overflow-x-auto rounded-2xl border border-gray-200/80">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-slate-100/80 text-xs font-bold font-satoshi text-navy uppercase tracking-wider border-b border-gray-200">
                            <th className="p-3.5">#</th>
                            <th className="p-3.5">Student Name</th>
                            <th className="p-3.5">Team Category</th>
                            <th className="p-3.5">Class &amp; Roll</th>
                            <th className="p-3.5">DOB</th>
                            <th className="p-3.5">Position</th>
                            <th className="p-3.5 text-right">Action</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 text-sm font-dm-sans">
                          {filteredStudents.map((student, index) => (
                            <tr key={student.id} className="hover:bg-slate-50/80 transition-colors">
                              <td className="p-3.5 text-gray-400 font-bold text-xs">{index + 1}</td>
                              <td className="p-3.5 font-bold text-navy">{student.name}</td>
                              <td className="p-3.5">
                                <span className="px-2.5 py-1 rounded-md bg-purple-50 text-purple font-bold text-xs">
                                  {student.teamType}
                                </span>
                              </td>
                              <td className="p-3.5 text-gray-600">{student.classRoll}</td>
                              <td className="p-3.5 text-gray-600">{student.dob}</td>
                              <td className="p-3.5 text-gray-800 font-medium">{student.position}</td>
                              <td className="p-3.5 text-right">
                                <button
                                  onClick={() => handleRemoveStudent(student.id)}
                                  className="text-red-500 hover:text-red-700 cursor-pointer p-1"
                                  title="Remove Student"
                                >
                                  <HugeiconsIcon icon={Delete02Icon} size={16} />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <div className="p-8 text-center bg-slate-50 rounded-2xl border border-dashed border-gray-300">
                      <p className="font-dm-sans text-sm text-gray-500">
                        No student entries added for <strong>{activeTeamFilter}</strong> yet. Use the form above to add student athletes.
                      </p>
                    </div>
                  )}

                </div>

                {/* Final Submission Button */}
                <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="text-xs text-gray-500 font-dm-sans">
                    Total {students.length} student athletes registered for {formData.clubName}.
                  </span>

                  {rosterSubmitted ? (
                    <div className="px-6 py-3 bg-green-100 text-green-800 font-bold font-satoshi rounded-xl flex items-center gap-2">
                      <HugeiconsIcon icon={CheckmarkCircle02Icon} size={20} />
                      <span>Roster Submitted &amp; Locked Successfully!</span>
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setRosterSubmitted(true)}
                      className="px-8 py-3.5 bg-orange hover:bg-orange/90 text-white font-extrabold font-satoshi text-base rounded-xl transition-all shadow-md cursor-pointer flex items-center gap-2"
                    >
                      <span>Complete &amp; Submit Full Student Roster</span>
                      <HugeiconsIcon icon={CheckmarkCircle02Icon} size={18} />
                    </button>
                  )}
                </div>

              </div>

            </div>
          )}

        </div>
      </section>
    </main>
  );
}
