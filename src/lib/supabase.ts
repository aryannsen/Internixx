import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export const BUCKET_NAME = 'student-photos';
export const MENTORS_BUCKET_NAME = 'mentor-photos';

/**
 * Returns the public Supabase Storage URL for a given student photo filename.
 * Pattern: {SUPABASE_URL}/storage/v1/object/public/student-photos/{filename}
 */
export function getStudentPhotoUrl(filename: string): string {
  if (!filename) return '';
  if (filename.startsWith('http://') || filename.startsWith('https://')) {
    return filename;
  }

  // Strip leading slashes or paths if only filename is provided (e.g., "student-01.jpg" or "/students/student-01.jpg")
  const cleanFilename = filename.split('/').pop() || filename;

  if (supabase) {
    const { data } = supabase.storage.from(BUCKET_NAME).getPublicUrl(cleanFilename);
    if (data?.publicUrl) {
      return data.publicUrl;
    }
  }

  if (supabaseUrl) {
    const baseUrl = supabaseUrl.replace(/\/+$/, '');
    return `${baseUrl}/storage/v1/object/public/${BUCKET_NAME}/${cleanFilename}`;
  }

  // Fallback if environment variable is pending configuration
  return `/storage/v1/object/public/${BUCKET_NAME}/${cleanFilename}`;
}

/**
 * Resolves mentor image URL supporting local public assets, remote URLs, or Supabase Storage.
 */
export function getMentorImageUrl(imagePathOrFilename: string): string {
  if (!imagePathOrFilename) return '';
  
  // If already absolute HTTP URL or local root path (e.g. /mentors/...)
  if (
    imagePathOrFilename.startsWith('http://') ||
    imagePathOrFilename.startsWith('https://') ||
    imagePathOrFilename.startsWith('/')
  ) {
    return imagePathOrFilename;
  }

  const cleanFilename = imagePathOrFilename.split('/').pop() || imagePathOrFilename;

  if (supabase) {
    const { data } = supabase.storage.from(MENTORS_BUCKET_NAME).getPublicUrl(cleanFilename);
    if (data?.publicUrl) {
      return data.publicUrl;
    }
  }

  if (supabaseUrl) {
    const baseUrl = supabaseUrl.replace(/\/+$/, '');
    return `${baseUrl}/storage/v1/object/public/${MENTORS_BUCKET_NAME}/${cleanFilename}`;
  }

  return `/mentors/${cleanFilename}`;
}
