export interface Condition {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Procedure {
  id: string;
  title: string;
  description: string;
  features?: string[];
}

export interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
}

export interface PhilosophyItem {
  title: string;
  description: string;
  icon: string;
}

export interface PatientInfoItem {
  title: string;
  content: string | React.ReactNode;
}
