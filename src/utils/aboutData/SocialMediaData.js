import { faLinkedinIn, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import cvFile from '../../assets/doc/CV_J_Znaor.pdf';
import { faInbox } from '@fortawesome/free-solid-svg-icons';

export const socialLinks = [
  {
    id: 1,
    href: 'https://linkedin.com/in/josipa-znaor-105692222',
    icon: faLinkedinIn,
    label: 'LinkedIn',
    external: true
  },
  {
    id: 2,
    href: 'https://www.instagram.com/timeless.treasur3s',
    icon: faInstagram,
    label: 'Instagram',
    external: true
  },
  {
    id: 3,
    href: 'https://github.com/jopaa10',
    icon: faGithub,
    label: 'GitHub',
    external: true
  },
  {
    id: 4,
    href: cvFile,
    icon: faInbox,
    label: 'Download CV',
    download: 'CV-Josipa_Znaor'
  }
];
