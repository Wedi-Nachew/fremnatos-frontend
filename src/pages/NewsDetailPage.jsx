import {
    ArrowLeft,
    CalendarDays,
    Clock3,
    Heart,
    MessageCircle,
    Send,
    UserRound,
    X,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getAllNewsItems } from "../data/newsData";

const LIKE_COUNTS_KEY = "fremnatos-news-like-counts";
const LIKED_ITEMS_KEY = "fremnatos-news-liked-items";
const COMMENTS_KEY = "fremnatos-news-comments";

const DEMO_COMMENTS = [
    {
        name: "Meklit A.",
        body: "I visited last month and saw how much this initiative is changing daily life for families. Thank you for sharing this update.",
        createdAt: "2026-03-05T09:14:00.000Z",
    },
    {
        name: "Samuel T.",
        body: "The progress in this story is inspiring. It would be great to see more field voices from branch staff in future posts.",
        createdAt: "2026-03-06T12:22:00.000Z",
    },
    {
        name: "Ruth K.",
        body: "This article gives clear detail without losing the human side. I especially appreciate the practical outcomes highlighted here.",
        createdAt: "2026-03-08T15:40:00.000Z",
    },
    {
        name: "Abel M.",
        body: "Reading this made me want to volunteer during the next campaign cycle. Please keep publishing these community stories.",
        createdAt: "2026-03-10T08:06:00.000Z",
    },
    {
        name: "Hanan G.",
        body: "Strong write-up and excellent photos. The timeline of impact helps readers understand how the work evolves over time.",
        createdAt: "2026-03-12T16:30:00.000Z",
    },
    {
        name: "Daniel B.",
        body: "Really proud to see transparent updates like this. The comments section also helps us learn from each other.",
        createdAt: "2026-03-14T10:48:00.000Z",
    },
];

const getDemoCommentsForNews = (newsId) =>
    DEMO_COMMENTS.map((comment, index) => ({
        ...comment,
        id: `${newsId}-demo-comment-${index + 1}`,
    }));

const parseStoredState = (value, fallback) => {
    if (!value) {
        return fallback;
    }

    try {
        return JSON.parse(value);
    } catch {
        return fallback;
    }
};

const formatCommentDate = (isoDate) => {
    const parsedDate = new Date(isoDate);

    if (Number.isNaN(parsedDate.getTime())) {
        return "Just now";
    }

    return parsedDate.toLocaleString(undefined, {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });
};

const NewsDetailPage = () => {
    const { newsId } = useParams();
    const newsItems = useMemo(() => getAllNewsItems(), []);
    const newsItem = newsItems.find((item) => item.id === newsId);
    const relatedStories = useMemo(() => {
        if (!newsItem) {
            return [];
        }

        return newsItems
            .filter((item) => item.id !== newsItem.id)
            .sort((left, right) => {
                const leftScore = left.category === newsItem.category ? 1 : 0;
                const rightScore = right.category === newsItem.category ? 1 : 0;
                return rightScore - leftScore;
            })
            .slice(0, 3);
    }, [newsItem, newsItems]);

    const [likeCounts, setLikeCounts] = useState(() => {
        if (typeof window === "undefined") {
            return {};
        }

        return parseStoredState(localStorage.getItem(LIKE_COUNTS_KEY), {});
    });
    const [likedItems, setLikedItems] = useState(() => {
        if (typeof window === "undefined") {
            return {};
        }

        return parseStoredState(localStorage.getItem(LIKED_ITEMS_KEY), {});
    });
    const [commentsByNews, setCommentsByNews] = useState(() => {
        if (typeof window === "undefined") {
            return {};
        }

        return parseStoredState(localStorage.getItem(COMMENTS_KEY), {});
    });
    const [commentName, setCommentName] = useState("");
    const [commentBody, setCommentBody] = useState("");
    const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
    const [isShowingMoreComments, setIsShowingMoreComments] = useState(false);

    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }

        localStorage.setItem(LIKE_COUNTS_KEY, JSON.stringify(likeCounts));
    }, [likeCounts]);

    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }

        localStorage.setItem(LIKED_ITEMS_KEY, JSON.stringify(likedItems));
    }, [likedItems]);

    useEffect(() => {
        if (typeof window === "undefined") {
            return;
        }

        localStorage.setItem(COMMENTS_KEY, JSON.stringify(commentsByNews));
    }, [commentsByNews]);

    useEffect(() => {
        if (!isCommentModalOpen) {
            return;
        }

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                setIsCommentModalOpen(false);
            }
        };

        window.addEventListener("keydown", handleEscape);
        return () => {
            window.removeEventListener("keydown", handleEscape);
        };
    }, [isCommentModalOpen]);

    if (!newsItem) {
        return (
            <main className="bg-[#f7f8fa] px-6 py-20 text-gray-900 md:px-10">
                <div className="mx-auto max-w-3xl rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm md:p-12">
                    <p className="text-sm font-semibold tracking-[0.2em] text-primary uppercase">
                        News and Events
                    </p>
                    <h1 className="mt-3 text-3xl font-bold md:text-4xl">
                        Story Not Found
                    </h1>
                    <p className="mt-4 text-gray-600">
                        The article you are looking for is unavailable or has
                        moved.
                    </p>
                    <Link
                        to="/news-and-events"
                        className="mt-7 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
                    >
                        <ArrowLeft size={16} />
                        Back to News Feed
                    </Link>
                </div>
            </main>
        );
    }

    const hasLiked = Boolean(likedItems[newsItem.id]);
    const likeCount = likeCounts[newsItem.id] ?? newsItem.baseLikes ?? 0;
    const comments =
        commentsByNews[newsItem.id]?.length > 0
            ? commentsByNews[newsItem.id]
            : getDemoCommentsForNews(newsItem.id);
    const highlightText =
        newsItem.detail ?? newsItem.summary ?? newsItem.excerpt;
    const articleParagraphs = newsItem.content ?? [];
    const leadParagraph = articleParagraphs[0] ?? newsItem.excerpt;
    const bodyParagraphs = articleParagraphs.slice(1);

    const handleLikeToggle = () => {
        setLikeCounts((prev) => {
            const currentCount = prev[newsItem.id] ?? newsItem.baseLikes ?? 0;
            return {
                ...prev,
                [newsItem.id]: hasLiked
                    ? Math.max(0, currentCount - 1)
                    : currentCount + 1,
            };
        });

        setLikedItems((prev) => ({
            ...prev,
            [newsItem.id]: !hasLiked,
        }));
    };

    const handleCommentSubmit = (event) => {
        event.preventDefault();

        const trimmedName = commentName.trim();
        const trimmedBody = commentBody.trim();

        if (!trimmedName || !trimmedBody) {
            return;
        }

        const newComment = {
            id: `${newsItem.id}-${Date.now()}`,
            name: trimmedName,
            body: trimmedBody,
            createdAt: new Date().toISOString(),
        };

        const existingComments =
            commentsByNews[newsItem.id]?.length > 0
                ? commentsByNews[newsItem.id]
                : getDemoCommentsForNews(newsItem.id);

        setCommentsByNews((prev) => ({
            ...prev,
            [newsItem.id]: [newComment, ...existingComments],
        }));

        setCommentName("");
        setCommentBody("");
        setIsCommentModalOpen(false);
    };

    return (
        <main className="bg-[#f3f4f6] text-gray-900">
            <section
                // id="hero-section"
                className="border-b border-gray-200 bg-white px-6 pt-24 pb-14 md:px-10 md:pt-30 md:pb-16"
            >
                <div className="mx-auto w-full max-w-6xl">
                    <Link
                        to="/news-and-events"
                        className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-primary hover:text-primary"
                    >
                        <ArrowLeft size={15} />
                        Back to News and Events
                    </Link>

                    <div className="mt-7 max-w-4xl">
                        <p className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                            {newsItem.category}
                        </p>
                        <h1 className="mt-5 text-4xl font-bold leading-[1.04] text-gray-900 md:text-6xl">
                            {newsItem.title}
                        </h1>
                        <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-600 md:text-lg">
                            {newsItem.excerpt}
                        </p>
                    </div>

                    <div className="mt-7 flex flex-wrap items-center gap-2 text-sm text-gray-700 md:text-base">
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-300 bg-gray-50 px-3 py-1.5">
                            <CalendarDays size={15} />
                            {newsItem.date}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-300 bg-gray-50 px-3 py-1.5">
                            <Clock3 size={15} />
                            {newsItem.readTime}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-300 bg-gray-50 px-3 py-1.5">
                            <UserRound size={15} />
                            {newsItem.author}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-300 bg-gray-50 px-3 py-1.5">
                            <Heart size={15} />
                            {likeCount} likes
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-300 bg-gray-50 px-3 py-1.5">
                            <MessageCircle size={15} />
                            {comments.length} comment
                            {comments.length === 1 ? "" : "s"}
                        </span>
                    </div>
                </div>
            </section>

            <section className="px-6 pb-12 md:px-10 md:pb-16">
                <div className="mx-auto -mt-12 grid max-w-6xl gap-6 xl:grid-cols-[minmax(0,1fr)_20rem]">
                    <article className="overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-[0_18px_55px_-35px_rgba(0,0,0,0.48)]">
                        <figure className="overflow-hidden">
                            <img
                                src={newsItem.image}
                                alt={newsItem.title}
                                className="h-72 w-full object-cover md:h-96"
                                loading="lazy"
                            />
                        </figure>

                        <div className="mx-auto max-w-3xl px-6 pb-8 pt-8 md:px-9 md:pb-10 md:pt-10">
                            <p className="text-lg leading-relaxed text-gray-700 first-letter:float-left first-letter:mr-2 first-letter:text-5xl first-letter:font-semibold first-letter:leading-[0.8] first-letter:text-primary md:text-[1.18rem] md:leading-9">
                                {leadParagraph}
                            </p>

                            <blockquote className="mt-7 rounded-2xl border border-primary/20 bg-primary/6 px-5 py-4 text-sm leading-relaxed text-gray-700 md:text-base">
                                {highlightText}
                            </blockquote>

                            <div className="mt-8 space-y-5 text-base leading-relaxed text-gray-700 md:text-[1.04rem] md:leading-8">
                                {bodyParagraphs.map((paragraph, index) => (
                                    <p
                                        key={`${newsItem.id}-paragraph-${index}`}
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>

                        <div className="border-t border-gray-200 bg-gray-50 px-6 py-4 md:px-9 md:py-5">
                            <div className="flex flex-wrap items-center justify-between gap-3">
                                <p className="inline-flex items-center gap-2 text-sm text-gray-600 md:text-base">
                                    <MessageCircle
                                        size={16}
                                        className="text-primary"
                                    />
                                    {comments.length} comment
                                    {comments.length === 1 ? "" : "s"} in
                                    discussion
                                </p>

                                <div className="flex flex-wrap items-center gap-2">
                                    <button
                                        type="button"
                                        onClick={handleLikeToggle}
                                        className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                                            hasLiked
                                                ? "bg-primary text-white hover:bg-primary/90"
                                                : "border border-gray-300 bg-white text-gray-700 hover:border-primary hover:text-primary"
                                        }`}
                                    >
                                        <Heart
                                            size={16}
                                            className={
                                                hasLiked ? "fill-white" : ""
                                            }
                                        />
                                        {hasLiked ? "Liked" : "Like"}
                                        <span className="rounded-full bg-black/10 px-2 py-0.5 text-xs">
                                            {likeCount}
                                        </span>
                                    </button>

                                    <a
                                        href="#comments"
                                        className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-primary hover:text-primary"
                                    >
                                        <MessageCircle size={15} />
                                        Jump to Comments
                                    </a>
                                </div>
                            </div>
                        </div>
                    </article>

                    <aside className="space-y-4 xl:sticky xl:top-24 xl:self-start">
                        <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
                            <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                                Story Details
                            </p>
                            <dl className="mt-3 space-y-3 text-sm text-gray-700">
                                <div>
                                    <dt className="text-gray-500">Category</dt>
                                    <dd className="font-semibold text-gray-900">
                                        {newsItem.category}
                                    </dd>
                                </div>
                                <div>
                                    <dt className="text-gray-500">Author</dt>
                                    <dd className="font-semibold text-gray-900">
                                        {newsItem.author}
                                    </dd>
                                </div>
                                <div>
                                    <dt className="text-gray-500">Read Time</dt>
                                    <dd className="font-semibold text-gray-900">
                                        {newsItem.readTime}
                                    </dd>
                                </div>
                            </dl>
                        </div>

                        <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
                            <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                                More Stories
                            </p>
                            <div className="mt-4 space-y-3">
                                {relatedStories.map((item) => (
                                    <Link
                                        key={item.id}
                                        to={`/news-and-events/${item.id}`}
                                        className="block rounded-2xl border border-gray-200 bg-gray-50 px-3 py-3 transition-colors hover:border-primary/40 hover:bg-primary/5"
                                    >
                                        <p className="text-[11px] font-semibold tracking-[0.12em] text-gray-500 uppercase">
                                            {item.category}
                                        </p>
                                        <p className="mt-1 text-sm font-semibold leading-snug text-gray-900">
                                            {item.title}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            <section id="comments" className="px-6 pb-20 md:px-10 md:pb-24">
                <div className="mx-auto grid max-w-6xl gap-6 xl:grid-cols-[minmax(0,1fr)_20rem]">
                    <div className="space-y-5">
                        <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
                            <div className="flex flex-wrap items-center justify-between gap-2">
                                <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                                    Community Comments
                                </h2>
                                <span className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold tracking-[0.08em] text-gray-600 uppercase">
                                    {comments.length} total
                                </span>
                            </div>

                            <div className="mt-5 space-y-3">
                                <div
                                    className={`space-y-3 ${
                                        isShowingMoreComments
                                            ? "max-h-[420px] overflow-y-auto pr-2"
                                            : ""
                                    }`}
                                >
                                    {(isShowingMoreComments
                                        ? comments
                                        : comments.slice(0, 3)
                                    ).map((comment) => (
                                        <article
                                            key={comment.id}
                                            className="rounded-2xl border border-gray-200 bg-gray-50 p-4 md:p-5"
                                        >
                                            <div className="flex items-start gap-3">
                                                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white">
                                                    {comment.name
                                                        .charAt(0)
                                                        .toUpperCase()}
                                                </span>

                                                <div className="w-full">
                                                    <div className="flex flex-wrap items-center justify-between gap-2">
                                                        <p className="text-sm font-semibold text-gray-900 md:text-base">
                                                            {comment.name}
                                                        </p>
                                                        <p className="text-xs text-gray-500 md:text-sm">
                                                            {formatCommentDate(
                                                                comment.createdAt,
                                                            )}
                                                        </p>
                                                    </div>
                                                    <p className="mt-2 text-sm leading-relaxed text-gray-700 md:text-base">
                                                        {comment.body}
                                                    </p>
                                                </div>
                                            </div>
                                        </article>
                                    ))}
                                </div>

                                {comments.length > 3 ? (
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setIsShowingMoreComments(
                                                (prev) => !prev,
                                            )
                                        }
                                        className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-primary hover:text-primary"
                                    >
                                        {isShowingMoreComments
                                            ? "Show less"
                                            : `Show more (${comments.length - 3})`}
                                    </button>
                                ) : null}
                            </div>
                        </div>

                        <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm md:p-7">
                            <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                                Discussion
                            </p>
                            <h3 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
                                Leave a Message
                            </h3>
                            <p className="mt-2 text-sm text-gray-600 md:text-base">
                                Start a thoughtful response by opening the
                                message modal. Comments are stored locally in
                                your browser for this demo.
                            </p>

                            <button
                                type="button"
                                onClick={() => setIsCommentModalOpen(true)}
                                className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
                            >
                                Add Comment
                                <Send size={15} />
                            </button>
                        </div>
                    </div>

                    <aside className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm xl:sticky xl:top-24 xl:self-start">
                        <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                            Continue Reading
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-gray-600">
                            Browse more branch updates, event announcements, and
                            impact stories from the newsroom feed.
                        </p>
                        <Link
                            to="/news-and-events"
                            className="mt-4 inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-primary hover:text-primary"
                        >
                            <ArrowLeft size={15} />
                            Back to News Feed
                        </Link>
                    </aside>
                </div>
            </section>

            {isCommentModalOpen ? (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 px-4 py-6">
                    <button
                        type="button"
                        aria-label="Close message modal"
                        onClick={() => setIsCommentModalOpen(false)}
                        className="absolute inset-0"
                    />

                    <div className="relative z-10 w-full max-w-2xl rounded-3xl border border-gray-200 bg-white p-5 shadow-[0_28px_80px_-28px_rgba(0,0,0,0.55)] md:p-7">
                        <div className="flex items-center justify-between gap-3">
                            <div>
                                <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                                    Discussion
                                </p>
                                <h3 className="mt-1 text-2xl font-bold text-gray-900 md:text-3xl">
                                    Leave a Message
                                </h3>
                            </div>

                            <button
                                type="button"
                                onClick={() => setIsCommentModalOpen(false)}
                                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 transition-colors hover:border-primary hover:text-primary"
                            >
                                <X size={16} />
                            </button>
                        </div>

                        <p className="mt-2 text-sm text-gray-600 md:text-base">
                            Add your name and thoughts below, then post your
                            message to the community thread.
                        </p>

                        <form
                            onSubmit={handleCommentSubmit}
                            className="mt-5 rounded-2xl border border-gray-200 bg-gray-50 p-4 md:p-5"
                        >
                            <label className="block text-sm font-semibold text-gray-700">
                                Your Name
                            </label>
                            <input
                                type="text"
                                value={commentName}
                                onChange={(event) =>
                                    setCommentName(event.target.value)
                                }
                                placeholder="Enter your name"
                                className="mt-2 w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-colors focus:border-primary"
                            />

                            <label className="mt-4 block text-sm font-semibold text-gray-700">
                                Message
                            </label>
                            <textarea
                                value={commentBody}
                                onChange={(event) =>
                                    setCommentBody(event.target.value)
                                }
                                placeholder="Write your message"
                                rows={5}
                                className="mt-2 w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition-colors focus:border-primary"
                            />

                            <div className="mt-4 flex flex-wrap items-center gap-2">
                                <button
                                    type="submit"
                                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
                                >
                                    Post Message
                                    <Send size={15} />
                                </button>

                                <button
                                    type="button"
                                    onClick={() => setIsCommentModalOpen(false)}
                                    className="inline-flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-primary hover:text-primary"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            ) : null}
        </main>
    );
};

export default NewsDetailPage;
