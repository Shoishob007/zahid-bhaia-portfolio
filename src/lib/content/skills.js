import { getId } from '@/lib/utils/helper';

export const skillsSection = {
  title: 'Skills and Services',
  skills: [
    {
      id: getId(),
      title: 'Offshore marketing and sales',
      // animation lottie file: https://lottiefiles.com/
      lottie: {
        light: '/lotties/services.json',
        dark: '/lotties/services-dark.json',
      },
      points: [
        'Managing and nurturing relationships with international clients to ensure long-term partnerships and customer satisfaction.',
        'Developing and executing strategic sales plans to achieve revenue growth targets and expand market share.',
        'Negotiating and closing high-value deals with clients, ensuring mutually beneficial terms and conditions.',
        'Conducting market research and analysis to identify new business opportunities and emerging trends.',
        'Setting clear sales objectives and key performance indicators (KPIs) to drive team performance and accountability.',
        'Collaborating with cross-functional teams to align marketing strategies with sales goals and organizational objectives.',
        'Monitoring and analyzing sales metrics to evaluate performance and optimize strategies for continuous improvement.',
      ],
      softwareSkills: [
        {
          name: 'International Sales',
          icon: 'emojione-v1:globe-showing-americas',
        },
        { name: 'Strategic Partnerships', icon: 'twemoji:handshake' },
        { name: 'OEM Management', icon: 'twemoji:factory' },
        { name: 'Online Advertising', icon: 'twemoji:globe-with-meridians' },
        { name: 'Analytical Skills', icon: 'twemoji:bar-chart' },
        { name: 'Mergers & Acquisitions (M&A)', icon: 'twemoji:money-bag' },
        { name: 'Requirements Analysis', icon: 'twemoji:clipboard' },
        { name: 'Advertising', icon: 'twemoji:megaphone' },
        { name: 'Financial Analysis', icon: 'twemoji:money-with-wings' },
        { name: 'Market Research', icon: 'twemoji:chart-increasing' },
        { name: 'Business Analysis', icon: 'twemoji:briefcase' },
        { name: 'Business Communications', icon: 'twemoji:e-mail' },
        { name: 'Business Development', icon: 'twemoji:rocket' },
        // { name: 'Microsoft Office', icon: 'vscode-icons:file-type-word' },
        { name: 'Team Management', icon: 'twemoji:busts-in-silhouette' },
      ],
    },
    // {
    //   id: getId(),
    //   title: 'UI/UX designing',
    //   lottie: {
    //     light: '/lotties/designing.json',
    //     dark: '/lotties/designing-dark.json',
    //   },
    //   points: [
    //     'Experience in designing user-friendly interfaces with figma',
    //     'Experience in developing design systems and style guides',
    //     'Providing user-friendly design solutions',
    //   ],
    //   softwareSkills: [
    //     { name: 'figma', icon: 'logos:figma' },
    //     { name: 'adobe illustrator', icon: 'logos:adobe-illustrator' },
    //     { name: 'adobe photoshop', icon: 'logos:adobe-photoshop' },
    //   ],
    // },
  ],
};
