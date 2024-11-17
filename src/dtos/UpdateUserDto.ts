export type UpdateUserDto = {
  name?: string;
  thumbnailToken?: string;
  headline?: string;
  description?: string;
  websiteUrl?: string;
  youtubeUrl?: string;
  facebookUrl?: string;
  linkedInUrl?: string;
  enrolledCoursesVisible?: boolean;
  isPublic?: boolean;
};
