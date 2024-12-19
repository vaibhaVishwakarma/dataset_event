export type Category = {
  id: string;
  icon: React.ComponentType;
  label: string;
};

export type Message = {
  id: string;
  type: 'system' | 'user' | 'followup';
  content: string;
  timestamp: Date;
  attachments?: Attachment[];
};

export type Attachment = {
  type: 'image' | 'audio';
  url: string;
  name: string;
};

export type FollowUpOption = {
  id: string;
  text: string;
};