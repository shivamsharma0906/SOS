import { BlogPost, BlogCategory } from './types';
import { roboticKneeSurgeryPost } from './robotic-knee-replacement-surgery';
import { roboticKneeRecoveryPost } from './robotic-knee-replacement-recovery-mumbai';
import { backPainYoungAdultsPost } from './back-pain-in-young-adults';
import { ankleSprainVsFracturePost } from './ankle-sprain-vs-ankle-fracture';

export * from './types';
export { roboticKneeSurgeryPost } from './robotic-knee-replacement-surgery';
export { roboticKneeRecoveryPost } from './robotic-knee-replacement-recovery-mumbai';
export { backPainYoungAdultsPost } from './back-pain-in-young-adults';
export { ankleSprainVsFracturePost } from './ankle-sprain-vs-ankle-fracture';

export const blogCategories: BlogCategory[] = [
  { id: 'all', label: 'All Specialties' },
  { id: 'knee', label: 'Joint Replacement & Knee' },
  { id: 'spine', label: 'Spine & Back Care' },
  { id: 'trauma', label: 'Trauma & Fracture Care' }
];

export const blogPostsData: BlogPost[] = [
  roboticKneeSurgeryPost,
  roboticKneeRecoveryPost,
  backPainYoungAdultsPost,
  ankleSprainVsFracturePost
];
