import { 
  WrenchIcon, 
  PackageIcon, 
  HardDriveIcon, 
  FileTextIcon, 
  MessagesSquareIcon,
  CreditCardIcon 
} from 'lucide-react';
import type { Category } from '../types';

export const categories: Category[] = [
  { id: 'service', icon: PackageIcon, label: 'Service Avail & Plans' },
  { id: 'technical', icon: WrenchIcon, label: 'Technical Issue' },
  { id: 'hardware', icon: HardDriveIcon, label: 'Hardware or Equipment help' },
  { id: 'plan', icon: CreditCardIcon, label: 'Current plan & details' },
  { id: 'terms', icon: FileTextIcon, label: 'Terms & conditions' },
  { id: 'team', icon: MessagesSquareIcon, label: 'Talk to technical team' },
];