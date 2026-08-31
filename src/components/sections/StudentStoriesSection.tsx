import React, { useState } from 'react';
import { STUDENT_STORIES, StudentStory } from '../../data/studentStories';
import { getStudentPhotoUrl } from '../../lib/supabase';
import { CheckCircle2 } from 'lucide-react';

interface StudentCardProps {
  student: StudentStory;
}

const StudentCard: React.FC<StudentCardProps> = ({ student }) => {
  const [imgError, setImgError] = useState(false);
  const photoUrl = getStudentPhotoUrl(student.photo);

  const initials = student.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2);

  return (
    <div className="w-[280px] sm:w-[310px] h-[380px] flex-shrink-0 bg-white rounded-[18px] border border-[#E2E8F0] shadow-[0_2px_12px_rgba(15,23,42,0.04)] hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)] hover:border-[#CBD5E1] transition-all duration-300 flex flex-col overflow-hidden select-none">
      {/* Top Student Photo Area */}
      <div className="relative h-[155px] w-full bg-[#F1F5F9] overflow-hidden flex-shrink-0">
        {!imgError && photoUrl ? (
          <img
            src={photoUrl}
            alt={student.name}
            loading="lazy"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-[#E2E8F0] text-[#0048D9] font-display font-bold text-xl select-none">
            {initials}
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Student Name & University */}
          <div className="mb-2">
            <h3 className="font-display text-base font-bold text-[#0F172A] leading-tight">
              {student.name}
            </h3>
            <p className="text-xs font-semibold text-[#0048D9] mt-0.5">
              {student.college}
            </p>
            <p className="text-[11px] text-[#64748B] font-medium mt-0.5">
              {student.program}
            </p>
          </div>

          {/* Genuine Student Feedback */}
          <p className="text-xs text-[#334155] leading-relaxed italic line-clamp-3">
            &ldquo;{student.feedback}&rdquo;
          </p>
        </div>

        {/* Bottom Verification Badge */}
        {student.completed && (
          <div className="pt-3 border-t border-[#F1F3F5] flex items-center justify-between mt-2">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-[#0048D9]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] flex-shrink-0" />
              <span>Internship Completed</span>
            </div>
            <span className="text-[10px] text-[#94A3B8] font-medium">Verified</span>
          </div>
        )}
      </div>
    </div>
  );
};

export const StudentStoriesSection: React.FC = () => {
  // Duplicate list to achieve a seamless, continuous infinite loop
  const marqueeList = [...STUDENT_STORIES, ...STUDENT_STORIES];

  return (
    <section className="py-12 sm:py-16 bg-[#F8F9FA] border-t border-[#E2E8F0] relative overflow-hidden">
      {/* Header */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 text-center mb-8 sm:mb-10">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#0F172A] tracking-tight">
          Real Students. Real Experiences.
        </h2>
        <p className="text-sm text-[#475569] mt-2 font-normal max-w-xl mx-auto">
          Hear from students who learned, built and grew with Internix.
        </p>
      </div>

      {/* Infinite Horizontal Marquee Track Container */}
      <div className="relative w-full overflow-hidden">
        {/* Left & Right subtle edge fade gradients */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 sm:w-28 bg-gradient-to-r from-[#F8F9FA] to-transparent z-10"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 sm:w-28 bg-gradient-to-l from-[#F8F9FA] to-transparent z-10"
          aria-hidden="true"
        />

        {/* Marquee Motion Strip */}
        <div className="flex gap-4 sm:gap-6 animate-student-marquee py-2 px-2">
          {marqueeList.map((student, idx) => (
            <StudentCard key={`${student.id}-${idx}`} student={student} />
          ))}
        </div>
      </div>
    </section>
  );
};
