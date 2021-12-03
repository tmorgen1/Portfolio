import projectProposalImage from '../images/projectImages/projectproposal.png';
import howToGuidImage from '../images/projectImages/howtoguide.png';
import projectProposalPdf from '../resources/ThomasMorgensternProjectProposal.pdf'

const PTWProjectsData = [
    {
        id: 1,
        image: projectProposalImage,
        download: projectProposalPdf,
        title: 'Project Proposal',
        description: 'Week long assignment in a course focused on honing skills relating to Professional and Technical Writing. The assignment focused on finding a topic of interest in your field, Computer Science in my case, that you can research and propose your own ideas of how to improve it. Personally, I\'m incredibly interested in the science of reverse engineering software and malware analysis. In order to be good at said analysis, it\'s necessary to understand the nitty gritty of programming, e.g. how th elines of code get translated into machine code and so on. Also, because of this interest, I chose to write about cyber security and the growing importance of its necessity.'
    },
    {
        id: 2,
        image: howToGuidImage,
        title: 'How-To Guide',
        description: 'Another week long assignment in the same course focused on producing a meaningful how-to guide with impactful imagery and descriptive and intentional directions. I chose to write mine about the steps someone should take if they wish to turn a programming idea into a reality.'
    }
];

export default PTWProjectsData;