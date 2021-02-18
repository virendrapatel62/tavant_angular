import { Education } from './education';
import { Experience } from './experience';
import { User } from './user';

export interface Profile {
  skills: string[];
  _id: string;
  user: User;
  bio: string;
  company: string;
  githubusername: string;
  location: string;
  status: string;
  website: string;
  date: string;
  education: Education[];
  experience: Experience[];
}
