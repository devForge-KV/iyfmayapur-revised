
import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch, FiHeart, FiMessageCircle, FiArrowRight, FiBookOpen, FiGlobe, FiUsers, FiFeather, FiCheckCircle, FiChevronDown, FiEdit3, FiCalendar } from "react-icons/fi";
import { GiLotus } from "react-icons/gi";
import HeroImg from "../../assets/AdhyananamritaImg/heroImg.png";

const reflections = [
  { id: 1, book: "Bhagavad Gita As It Is", category: "Bhagavad Gita", language: "Hindi", title: "Karma Yoga ko maine kaise samjha", author: "Rohit Sharma", location: "Mayapur, West Bengal", date: "10 Oct 2024", text: "Maine is book se samjha ki humein apna kartavya imaandari se karna chahiye aur har kaam ke result ko Bhagavan par chhod dena chahiye.", topic: "Karma Yoga", likes: 48, comments: 12, color: "from-amber-700 to-yellow-950" },
  { id: 2, book: "Srimad Bhagavatam", category: "Srimad Bhagavatam", language: "English", title: "The Essence of Devotion in Daily Life", author: "Aditi Verma", location: "Vrindavan, Uttar Pradesh", date: "8 Oct 2024", text: "This book helped me understand that real happiness comes from devotion to Krishna. The pastimes of the Lord teach us humility, love and surrender.", topic: "Bhakti", likes: 36, comments: 8, color: "from-sky-800 to-blue-950" },
  { id: 3, book: "Nectar of Devotion", category: "Nectar of Devotion", language: "Bengali", title: "ভক্তির পথে সহজ সুন্দর ব্যাখ্যা", author: "Subho Das", location: "Kolkata, West Bengal", date: "5 Oct 2024", text: "এই বইটি আমাকে শিখিয়েছে কিভাবে ভক্তি আমাদের জীবনে আনন্দ ও শান্তি এনে দেয় এবং আমাদের কৃষ্ণের আরও কাছে নিয়ে যায়।", topic: "Devotional Practice", likes: 28, comments: 6, color: "from-emerald-800 to-green-950" },
  { id: 4, book: "Teachings of Lord Caitanya", category: "Teachings of Lord Caitanya", language: "Hindi", title: "Chaitanya Mahaprabhu ka Sandesh Aaj ke Liye", author: "Neha Patel", location: "Ahmedabad, Gujarat", date: "5 Oct 2024", text: "Is book ne mujhe sikhaya ki naam sankirtan hi is yug ka sabse mahan upaya hai. Chaitanya Mahaprabhu ka prem har jeev ke liye hai.", topic: "Nama Sankirtan", likes: 52, comments: 14, color: "from-yellow-700 to-amber-950" },
  { id: 5, book: "Nectar of Instruction", category: "Nectar of Instruction", language: "English", title: "Practical Guidance for a Spiritual Life", author: "Arjun Mehta", location: "Mumbai, Maharashtra", date: "28 Sep 2024", text: "This book gives very practical instructions on how to practice devotion in daily life. I especially liked the section on association and avoiding offenses.", topic: "Sadhana", likes: 25, comments: 4, color: "from-orange-800 to-red-950" }
];

const popularBooks = [
  "Bhagavad Gita As It Is",
  "Srimad Bhagavatam",
  "Nectar of Devotion",
  "Teachings of Lord Caitanya"
];

function BookCover({ book, index = 0, large = false }) {
  const colors = [
    "from-[#9c501b] via-[#e6a83b] to-[#5b250c]",
    "from-[#103e59] via-[#176c82] to-[#071e38]",
    "from-[#174b31] via-[#34784a] to-[#092b1d]",
    "from-[#9a6619] via-[#eab84e] to-[#603009]"
  ];

  return (
    <div className={`relative flex ${large ? "h-full min-h-[150px] w-full" : "h-[126px] w-full"} items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${colors[index % colors.length]} p-3 text-center shadow-[inset_2px_2px_8px_#ffffff40,inset_-3px_-3px_8px_#00000035]`}>
      <div className="absolute inset-2 rounded-lg border border-amber-200/50"/>
      <div className="absolute inset-3 rounded-md border border-amber-200/30"/>
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-2 text-[#ffdf8b]">
        <GiLotus className="text-2xl opacity-90"/>
        <span className="font-serif text-xs font-bold uppercase leading-4 tracking-wide">{book}</span>
        <span className="text-[8px] tracking-[0.2em] text-amber-100/80">BHAKTIVEDANTA BOOKS</span>
      </div>
    </div>
  );
}

function ReflectionCard({ item, index }) {
  const [liked, setLiked] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="group rounded-2xl border border-white/90 bg-[#fbf5e9]/95 p-3 shadow-[5px_5px_14px_#dfd5c7,-5px_-5px_14px_#ffffff] transition-all duration-300 hover:-translate-y-1 hover:shadow-[9px_9px_20px_#dfd5c7,-9px_-9px_20px_#ffffff] sm:p-4">
      <div className="grid grid-cols-[92px_minmax(0,1fr)] gap-3 sm:grid-cols-[125px_minmax(0,1fr)] sm:gap-5">
        <div className={`overflow-hidden rounded-xl bg-gradient-to-br ${item.color} p-2 shadow-inner`}>
          <BookCover book={item.book} index={index} large/>
        </div>

        <div className="min-w-0">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <p className="text-[9px] font-bold uppercase tracking-[0.13em] text-amber-700 sm:text-[10px]">
              {item.category} <span className="mx-1">•</span> {item.language}
            </p>
            <span className="shrink-0 text-[10px] text-stone-400">{item.date}</span>
          </div>

          <h3 className="mt-1 font-serif text-lg leading-tight text-[#202b38] sm:text-xl">{item.title}</h3>

          <div className="mt-2 flex flex-wrap items-center gap-2 text-[10px] text-stone-500 sm:text-xs">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 font-bold text-amber-800">{item.author.charAt(0)}</span>
            <span className="font-semibold text-stone-700">{item.author}</span>
            <span>•</span>
            <span>{item.location}</span>
          </div>

          <p className={`mt-2 text-xs leading-5 text-stone-600 sm:text-sm ${expanded ? "" : "line-clamp-2"}`}>{item.text}</p>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
            <button type="button" onClick={() => setLiked(v => !v)} className={`flex items-center gap-1.5 text-xs transition ${liked ? "text-amber-700" : "text-stone-600 hover:text-amber-600"}`}>
              <FiHeart className={liked ? "fill-amber-500 text-amber-600" : ""}/> {item.likes + (liked ? 1 : 0)} Helpful
            </button>
            <button type="button" onClick={() => setExpanded(v => !v)} className="flex items-center gap-1.5 text-xs text-stone-600 hover:text-amber-700">
              <FiMessageCircle/> {item.comments} Comments
            </button>
            <span className="rounded-full bg-amber-100/80 px-3 py-1 text-[10px] text-amber-800">♧ {item.topic}</span>
            <button type="button" onClick={() => setExpanded(v => !v)} className="ml-auto flex h-8 w-8 items-center justify-center rounded-full border border-amber-500 text-amber-700 transition hover:bg-amber-500 hover:text-white" aria-label="Read reflection">
              <FiArrowRight/>
            </button>
          </div>

          {expanded && <p className="mt-3 rounded-xl bg-amber-50 p-3 text-xs leading-5 text-stone-600">Full reflection preview: {item.text} This reflection is a sample for the page design.</p>}
        </div>
      </div>
    </article>
  );
}

export default function Adhayanamrita() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [bookFilter, setBookFilter] = useState("All Books");
  const [languageFilter, setLanguageFilter] = useState("All Languages");
  const [topicFilter, setTopicFilter] = useState("All Topics");
  const [sort, setSort] = useState("Newest First");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    let list = reflections.filter(item => {
      const term = search.toLowerCase();
      const matchesSearch = `${item.title} ${item.book} ${item.text} ${item.author} ${item.topic}`.toLowerCase().includes(term);
      const matchesBook = bookFilter === "All Books" || item.category === bookFilter;
      const matchesLanguage = languageFilter === "All Languages" || item.language === languageFilter;
      const matchesTopic = topicFilter === "All Topics" || item.topic === topicFilter;
      return matchesSearch && matchesBook && matchesLanguage && matchesTopic;
    });
    if (sort === "Most Helpful") list = [...list].sort((a, b) => b.likes - a.likes);
    if (sort === "Oldest First") list = [...list].reverse();
    return list;
  }, [search, bookFilter, languageFilter, topicFilter, sort]);

  const openForm = () => navigate("/adhyananamrita/form");

  return (
    <main className="min-h-screen overflow-x-clip bg-[#fbf6eb] text-[#202923]">
      {/* Hero */}
      <section className="relative isolate min-h-[390px] overflow-hidden sm:min-h-[410px]">
        <img src={HeroImg} alt="Spiritual books and devotional items" className="absolute inset-0 -z-20 h-full w-full object-cover object-center"/>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#fff1d5]/95 via-[#fff0d4]/80 to-[#fff0d4]/5"/>
        <div className="mx-auto max-w-7xl px-5 pb-14 pt-12 sm:px-8 sm:pt-16">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.23em] text-amber-800">Spiritual Reading Community</p>
          <h1 className="max-w-2xl font-serif text-4xl font-semibold leading-[1.04] text-[#241b17] sm:text-5xl lg:text-6xl">Read. Reflect. Share.</h1>
          <h2 className="mt-2 max-w-xl font-serif text-xl leading-snug text-[#492d1e] sm:text-2xl">Every book carries timeless wisdom.<br/>Every reader adds a new light.</h2>
          <p className="mt-3 max-w-lg text-sm leading-6 text-[#493b30]">Share your understanding of spiritual books in your own language and inspire others on their spiritual journey.</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {["Hindi", "English", "Bengali", "Other Languages"].map(lang => <span key={lang} className="rounded-xl border border-amber-700/30 bg-white/70 px-4 py-2 text-xs font-medium text-amber-900 shadow-sm">{lang}</span>)}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 hidden border-t border-white/70 bg-[#fff9ed]/90 backdrop-blur-md sm:block">
          <div className="mx-auto grid max-w-7xl grid-cols-4 divide-x divide-amber-900/10 px-4 py-3">
            {[["Share Realisations","From Any Book"],["Inspire","Fellow Seekers"],["Learn Different","Perspectives"],["Build a Spiritual","Reading Community"]].map(([title, desc], i) => (
              <div key={title} className="flex items-center gap-3 px-3"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700"><GiLotus size={20}/></span><div><p className="text-xs font-semibold">{title}</p><p className="text-[10px] text-stone-500">{desc}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-5 px-4 py-7 sm:px-6 lg:grid-cols-[2fr_0.95fr] lg:px-8">
        <div className="min-w-0">
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-amber-700 shadow-[4px_4px_10px_#dfd5c7,-4px_-4px_10px_#ffffff]"><GiLotus size={25}/></span>
              <div><h2 className="font-serif text-2xl sm:text-3xl">Explore Book Reflections</h2><p className="mt-1 text-xs text-stone-500">Read what devotees have understood from spiritual books.</p></div>
            </div>
            <div className="flex w-full items-center rounded-xl border border-white bg-[#f8f0e3] px-3 shadow-[inset_3px_3px_7px_#dfd5c7,inset_-3px_-3px_7px_#ffffff] sm:w-64">
              <FiSearch className="shrink-0 text-stone-500"/>
              <input value={search} onChange={e => { setSearch(e.target.value); setPage(1); }} placeholder="Search book, title or keyword..." className="min-w-0 flex-1 bg-transparent px-2 py-3 text-xs outline-none"/>
            </div>
          </div>

          <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {[
              [bookFilter, setBookFilter, ["All Books", ...new Set(reflections.map(r => r.category))]],
              [languageFilter, setLanguageFilter, ["All Languages", "Hindi", "English", "Bengali"]],
              [topicFilter, setTopicFilter, ["All Topics", ...new Set(reflections.map(r => r.topic))]],
              [sort, setSort, ["Newest First", "Oldest First", "Most Helpful"]]
            ].map(([value, setter, options], i) => (
              <div key={i} className="relative">
                <select value={value} onChange={e => setter(e.target.value)} className="w-full appearance-none rounded-xl border border-white bg-[#f8f0e3] px-3 py-2.5 pr-7 text-xs shadow-[4px_4px_9px_#dfd5c7,-4px_-4px_9px_#ffffff] outline-none focus:border-amber-400">
                  {options.map(option => <option key={option} value={option}>{option}</option>)}
                </select>
                <FiChevronDown className="pointer-events-none absolute right-2.5 top-3 text-xs text-amber-700"/>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            {filtered.length ? filtered.map((item, i) => <ReflectionCard key={item.id} item={item} index={i}/>) : (
              <div className="rounded-2xl border border-white bg-[#f8f0e3] p-10 text-center shadow-[6px_6px_16px_#dfd5c7,-6px_-6px_16px_#ffffff]">
                <FiSearch className="mx-auto text-3xl text-amber-600"/>
                <h3 className="mt-3 font-serif text-xl">No reflections found</h3>
                <p className="mt-1 text-sm text-stone-500">Try changing your search or filters.</p>
              </div>
            )}
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">
            <button disabled={page === 1} onClick={() => setPage(p => Math.max(1, p - 1))} className="rounded-lg border border-white bg-[#f8f0e3] px-3 py-2 text-sm shadow-sm disabled:opacity-40">‹</button>
            {[1, 2, 3, 4, 5].map(n => <button key={n} onClick={() => setPage(n)} className={`rounded-lg px-3.5 py-2 text-xs ${page === n ? "bg-amber-600 text-white shadow-md" : "border border-white bg-[#f8f0e3] text-stone-700 shadow-sm"}`}>{n}</button>)}
            <span className="px-1 text-stone-400">…</span>
            <button onClick={() => setPage(p => p + 1)} className="rounded-lg border border-white bg-[#f8f0e3] px-3 py-2 text-sm shadow-sm">›</button>
          </div>
          <p className="mt-2 text-center text-[10px] text-stone-400">Sample reflections shown for layout preview.</p>
        </div>

        {/* Sidebar */}
        <aside className="space-y-4 lg:sticky lg:top-5">
          <div className="rounded-2xl border border-white bg-[#fbf5e9] p-5 shadow-[7px_7px_18px_#dfd5c7,-7px_-7px_18px_#ffffff]">
            <div className="flex items-start gap-3"><span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-100 text-amber-700 shadow-inner"><FiFeather size={26}/></span><div><h3 className="font-serif text-2xl">Share Your Realisation</h3><p className="mt-1 text-xs leading-5 text-stone-500">Have you read a spiritual book? Share what you understood and inspire others.</p></div></div>
            <button onClick={openForm} className="mt-4 flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-amber-600 to-amber-500 px-4 py-3 text-sm font-semibold text-white shadow-[5px_5px_12px_#dfd5c7,-3px_-3px_10px_#ffffff] transition hover:-translate-y-0.5 hover:shadow-lg">Write a Reflection <FiArrowRight/></button>
            <p className="mt-3 text-center text-[10px] leading-4 text-stone-500">Your submission will be reviewed before publishing to maintain the quality of content.</p>
          </div>

          <div className="rounded-2xl border border-white bg-[#fbf5e9] p-4 shadow-[7px_7px_18px_#dfd5c7,-7px_-7px_18px_#ffffff]">
            <div className="mb-3 flex items-center justify-between gap-2"><h3 className="flex items-center gap-2 font-serif text-xl"><FiBookOpen className="text-amber-600"/>Popular Books</h3><button onClick={() => { setBookFilter("All Books"); setSearch(""); }} className="flex items-center gap-1 text-xs text-amber-700">View All <FiArrowRight/></button></div>
            <div className="grid grid-cols-4 gap-2">
              {popularBooks.map((book, i) => <button type="button" key={book} onClick={() => { setBookFilter(book); window.scrollTo({ top: 350, behavior: "smooth" }); }} className="min-w-0 text-center"><BookCover book={book} index={i}/><span className="mt-2 block text-[10px] leading-4 text-stone-700">{book}</span></button>)}
            </div>
          </div>

          <div className="rounded-2xl border border-white bg-[#fbf5e9] p-4 shadow-[7px_7px_18px_#dfd5c7,-7px_-7px_18px_#ffffff]">
            <h3 className="mb-4 flex items-center gap-2 font-serif text-xl"><FiHeart className="text-amber-600"/>Most Loved Reflections</h3>
            {[["The Power of Chanting in Daily Life","Priya N.","Delhi",120],["How Srimad Bhagavatam Changed My Life","Rahul K.","Bangalore",98],["Karma Yoga for Students","Ishita S.","Pune",86]].map(([title, author, city, likes], i) => (
              <div key={title} className="flex items-center gap-3 border-b border-amber-900/5 py-3 last:border-0">
                <div className="h-12 w-10 shrink-0 overflow-hidden rounded-lg"><BookCover book={popularBooks[i]} index={i}/></div>
                <div className="min-w-0 flex-1"><p className="text-xs font-medium leading-4">{title}</p><p className="mt-1 text-[10px] text-stone-500">{author} · {city}</p></div>
                <span className="flex items-center gap-1 text-[10px] text-amber-700"><FiHeart/>{likes}</span>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-white bg-[#fbf5e9] p-4 shadow-[7px_7px_18px_#dfd5c7,-7px_-7px_18px_#ffffff]">
            <h3 className="mb-4 flex items-center gap-2 font-serif text-xl"><FiCheckCircle className="text-amber-600"/>Community Stats</h3>
            <div className="grid grid-cols-2 gap-4 text-center">
              {[[ "520+", "Reflections", FiEdit3 ], [ "5,000+", "Readers", FiUsers ], [ "20+", "Spiritual Books", FiBookOpen ], [ "12+", "Languages", FiGlobe ]].map(([number, label, Icon]) => <div key={label}><span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 text-amber-700"><Icon size={19}/></span><p className="mt-2 text-sm font-bold">{number}</p><p className="text-[10px] text-stone-500">{label}</p></div>)}
            </div>
          </div>

          <div className="rounded-2xl border border-white bg-gradient-to-br from-[#fff0d5] to-[#f0d7b1] p-5 shadow-[7px_7px_18px_#dfd5c7,-7px_-7px_18px_#ffffff]">
            <GiLotus className="mb-2 text-3xl text-amber-700"/>
            <p className="font-serif text-lg italic leading-6 text-[#483126]">“When you read our books, you associate with Krishna directly.”</p>
            <p className="mt-3 text-[10px] font-semibold tracking-widest text-amber-800">— SRILA PRABHUPADA</p>
          </div>
        </aside>
      </section>

      <footer className="bg-[#0d291e] px-5 py-9 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div><div className="font-serif text-2xl">IYF Sridham Mayapur</div><p className="mt-3 text-sm leading-6 text-white/60">Building a generation of kind, conscious and capable leaders for a better world.</p></div>
          <div><h4 className="mb-3 font-semibold text-amber-400">Quick Links</h4><div className="space-y-2 text-sm text-white/65">{["Home", "Events", "Courses", "Gallery", "Store", "Donation", "Adhyamrit"].map(x => <p key={x}>{x}</p>)}</div></div>
          <div><h4 className="mb-3 font-semibold text-amber-400">Our Services</h4><div className="space-y-2 text-sm text-white/65">{["Youth Spiritual Lodging", "Youth Spiritual Food", "Youth Counselling", "Youth Festivals", "Gita Distribution", "Spiritual Education"].map(x => <p key={x}>• {x}</p>)}</div></div>
          <div><h4 className="mb-3 font-semibold text-amber-400">Be Part of Something Meaningful</h4><p className="mb-4 text-sm text-white/65">Read, reflect and share spiritual wisdom.</p><a href="/join-us" className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-5 py-3 text-sm font-semibold text-[#163323] transition hover:-translate-y-0.5">Join the Movement <FiArrowRight/></a></div>
        </div>
        <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-4 text-xs text-white/45">© IYF Sridham Mayapur. All rights reserved.</div>
      </footer>
    </main>
  );
}
