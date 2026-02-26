import React from "react";

type NewsItem = {
    date: string;
    title: string;
    description: string;
};

const newsItems: NewsItem[] = [
    {
        date: "26 Feb 2026",
        title: "Project Funded",
        description:
            "The project was funded by the National Research Fund of Singapore.",
    },
];

const AgentFutureNews: React.FC = () => {
    return (
        <section>
            <h2 className="text-2xl font-semibold mb-4">News</h2>
            <ul className="relative ml-2 border-l border-slate-200/80 pl-6">
                {newsItems.map((item, index) => (
                    <li
                        key={`${item.date}-${index}`}
                        className="group relative pb-6 last:pb-0"
                    >
                        <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full border border-slate-300 bg-white" />
                        {/* <span className="absolute -left-[13px] top-1 h-5 w-5 rounded-full bg-slate-200/60 blur-sm" /> */}
                        <p className="text-sm font-medium text-slate-600">
                            <strong className="font-semibold text-slate-700">
                                {item.date}
                            </strong>{" "}
                            — {item.title}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-slate-700/90">
                            {item.description}
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default AgentFutureNews;