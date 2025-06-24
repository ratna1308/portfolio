import { GENERAL_INFO } from '@/lib/data';
import { GitFork, Star } from 'lucide-react';

interface RepoStats {
    stargazers_count: number;
    forks_count: number;
}

const Footer = async () => {
    let stargazers_count = 0;
    let forks_count = 0;

    try {
        const res = await fetch('https://api.github.com/repos/ratna1308/portfolio', {
            next: {
                revalidate: 60 * 60, // 1 hour
            },
        });

        if (!res.ok) {
            throw new Error(`GitHub API error: ${res.status}`);
        }

        const data = (await res.json()) as RepoStats;
        stargazers_count = data.stargazers_count;
        forks_count = data.forks_count;
    } catch (error) {
        console.error('Failed to fetch GitHub repo stats:', error);
        // You could also optionally show a fallback message or hide the stats
    }

    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg font-semibold">Let’s build something impactful.</p>
                <p className="text-xl sm:text-2xl mt-3"></p>
                    📧 <span className="font-medium">Reach out:</span>{' '}
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="underline hover:text-blue-600 transition-colors duration-200"
                >
                    {GENERAL_INFO.email}
                </a>

                <div className="">
                    <a
                        href="https://github.com/ratna1308/portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="leading-none text-muted-foreground hover:underline hover:text-white"
                    >
                        Design & built by Ratna Sonawane
                        <div className="flex items-center justify-center gap-5 pt-1">
                            <span className="flex items-center gap-2">
                                <Star size={18} /> {stargazers_count}
                            </span>
                            <span className="flex items-center gap-2">
                                <GitFork size={18} /> {forks_count}
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
