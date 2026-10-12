
import React, { useState } from "react";
import { FiUser, FiMapPin, FiBookOpen, FiFileText, FiHeart, FiUploadCloud, FiPlus, FiArrowRight, FiX, FiCheckCircle } from "react-icons/fi";
import { GiLotus } from "react-icons/gi";
import HeroImg from "../../assets/AdhyananamritaImg/heroImg.png";

const books = ["Bhagavad-gita As It Is", "Srimad Bhagavatam", "Nectar of Devotion", "Teachings of Lord Caitanya", "Nectar of Instruction", "Easy Journey to Other Planets", "Science of Self-Realization", "Krishna — The Supreme Personality of Godhead"];

const guidelines = [
  "Share your genuine understanding and experience.",
  "Use your own words; avoid copying others.",
  "Keep the content respectful and aligned with Vaishnava values.",
  "Write in Hindi, English, Bengali or another language.",
  "Avoid promotional or commercial content.",
  "Your submission will be reviewed before publishing."
];

const neoCard = "rounded-[26px] border border-white/90 bg-[#f8f0e3] shadow-[9px_9px_22px_#dfd5c7,-9px_-9px_22px_#ffffff]";
const neoField = "rounded-2xl border border-white/90 bg-[#f5ecdf] shadow-[inset_4px_4px_9px_#e3d8c9,inset_-4px_-4px_9px_#ffffff] transition-all duration-300 focus-within:border-[#f59e0b] focus-within:shadow-[inset_2px_2px_5px_#e3d8c9,inset_-2px_-2px_5px_#ffffff]";
const inputText = "min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-[#30352f] outline-none placeholder:text-[#a49a8d]";

function FieldLabel({ children, required }) {
  return <label className="mb-2 block text-sm font-semibold text-[#29342d]">{children} {required && <span className="text-amber-600">*</span>}</label>;
}

function InputBox({ icon: Icon, children, className = "" }) {
  return (
    <div className={`${neoField} flex overflow-hidden ${className}`}>
      <span className="flex w-11 shrink-0 items-center justify-center border-r border-[#eadfce] text-[#f59e0b]"><Icon size={18}/></span>
      {children}
    </div>
  );
}

export default function Form() {
  const [form, setForm] = useState({ name: "", location: "", book: "", language: "English", title: "", reflection: "", takeaways: "" });
  const [customBook, setCustomBook] = useState("");
  const [showCustomBook, setShowCustomBook] = useState(false);
  const [images, setImages] = useState([]);
  const [agreed, setAgreed] = useState(false);

  const update = (e) => setForm(current => ({ ...current, [e.target.name]: e.target.value }));
  const chosenBook = showCustomBook ? customBook : form.book;

  const uploadImages = (e) => {
    const selected = Array.from(e.target.files || []);
    const valid = selected.filter(file => ["image/jpeg", "image/png", "image/webp"].includes(file.type) && file.size <= 5 * 1024 * 1024);
    setImages(current => [...current, ...valid].slice(0, 5));
    if (selected.some(file => file.size > 5 * 1024 * 1024)) alert("Each image must be 5MB or smaller.");
    if (selected.some(file => !["image/jpeg", "image/png", "image/webp"].includes(file.type))) alert("Please select PNG, JPG or WEBP images.");
    e.target.value = "";
  };

  const submit = (e) => {
    e.preventDefault();
    if (!chosenBook.trim()) return alert("Please select or enter a book.");
    if (form.reflection.trim().length < 100) return alert("Please write at least 100 characters in your reflection.");
    if (!agreed) return alert("Please agree to the submission guidelines.");

    // Connect this handler to your backend/API to save the post.
    console.log({ ...form, book: chosenBook, images });
    alert("Form validation successful! Backend connection is needed to publish your reflection.");
  };

  return (
    <main className="min-h-screen overflow-x-clip bg-[#f4ecdf] text-[#202923]">
      {/* Hero */}
      <section className="relative isolate flex min-h-[340px] items-center overflow-hidden sm:min-h-[390px]">
        <img src={HeroImg} alt="Spiritual books and devotional items" className="absolute inset-0 -z-20 h-full w-full object-cover object-center"/>
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#fff3d8]/95 via-[#fff0d4]/80 to-[#fff0d4]/10"/>
        <div className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8">
          <p className="mb-5 text-xs font-semibold tracking-widest text-[#87502f]">HOME　›　ADHYAMRIT　›　SHARE YOUR REALISATION</p>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#f59e0b]">Adhyayanamrita · Spiritual Reading Community</p>
          <h1 className="max-w-xl font-serif text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">Share Your <span className="block italic text-[#f59e0b]">Realisation</span></h1>
          <p className="mt-4 max-w-lg font-serif text-lg leading-7 text-[#40352d]">Every reader has a unique understanding. Share how a spiritual book has inspired you in your own words and help others on their journey.</p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs text-[#493b30]">
            {["Inspire Others", "Share in Your Language", "Build a Spiritual Community", "Keep Wisdom Alive"].map(item => (
              <span key={item} className="rounded-full border border-white/90 bg-[#fff5e5]/90 px-4 py-2.5 shadow-[4px_4px_10px_#dfd0ba,-4px_-4px_10px_#ffffff]">✿　{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Main form and sidebar */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[1.8fr_1fr] lg:px-8">
        <form onSubmit={submit} className={`${neoCard} p-5 sm:p-7 lg:p-8`}>
          <div className="mb-8 flex items-start gap-3">
            <GiLotus className="mt-1 shrink-0 text-3xl text-[#f59e0b]"/>
            <div>
              <h2 className="font-serif text-3xl leading-tight sm:text-4xl">Post a New Book Reflection</h2>
              <p className="mt-2 text-sm leading-6 text-gray-600">Share your understanding, experiences, and key learnings from any spiritual book.</p>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <FieldLabel required>Your Name</FieldLabel>
              <InputBox icon={FiUser}><input required name="name" value={form.name} onChange={update} placeholder="Enter your name (e.g. Krishna Das)" className={inputText}/></InputBox>
            </div>

            <div>
              <FieldLabel required>Your Location (City/State/Country)</FieldLabel>
              <InputBox icon={FiMapPin}><input required name="location" value={form.location} onChange={update} placeholder="E.g. Mayapur, West Bengal, India" className={inputText}/></InputBox>
            </div>

            <div>
              <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                <FieldLabel required>Select Book</FieldLabel>
                <button type="button" onClick={() => setShowCustomBook(v => !v)} className="text-xs font-medium text-[#f59e0b] underline underline-offset-4 hover:text-[#d97706]">{showCustomBook ? "Choose from list" : "Can't find your book? Add manually"}</button>
              </div>
              {showCustomBook ? (
                <InputBox icon={FiBookOpen}><input required value={customBook} onChange={e => setCustomBook(e.target.value)} placeholder="Enter book title and author" className={inputText}/></InputBox>
              ) : (
                <InputBox icon={FiBookOpen}><select required name="book" value={form.book} onChange={update} className={`${inputText} cursor-pointer`}><option value="">Choose a book from the list</option>{books.map(book => <option key={book} value={book}>{book}</option>)}</select></InputBox>
              )}
            </div>

            <div>
              <FieldLabel required>Language</FieldLabel>
              <div className="flex flex-wrap gap-2">
                {["English", "Hindi", "Bengali", "Other Language"].map(lang => (
                  <label key={lang} className={`flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2.5 text-sm transition-all duration-300 ${form.language === lang ? "border-[#fbbf24] bg-[#fef3c7] text-[#92400e] shadow-[inset_3px_3px_6px_#e4ccb2,inset_-3px_-3px_6px_#fff9ef]" : "border-white bg-[#f7efe4] shadow-[4px_4px_9px_#dfd5c7,-4px_-4px_9px_#ffffff] hover:-translate-y-0.5"}`}>
                    <input type="radio" name="language" value={lang} checked={form.language === lang} onChange={update} className="accent-amber-500"/>{lang}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <FieldLabel required>Post Title</FieldLabel>
              <InputBox icon={FiFileText}><input required name="title" value={form.title} onChange={update} placeholder="A short title (e.g. How Bhagavad Gita changed my life)" className={inputText}/></InputBox>
            </div>

            <div>
              <FieldLabel required>Your Reflection</FieldLabel>
              <InputBox icon={FiFileText} className="items-start"><textarea required minLength={100} maxLength={2000} name="reflection" value={form.reflection} onChange={update} placeholder="Share your understanding in your own words. What did you learn? How has it inspired you? (Minimum 100 characters)" rows={5} className={`${inputText} resize-y leading-6`}/></InputBox>
              <p className="mt-2 text-right text-xs text-gray-500">{form.reflection.length}/2000 characters</p>
            </div>

            <div>
              <FieldLabel>Key Takeaways (Optional)</FieldLabel>
              <InputBox icon={FiHeart} className="items-start"><textarea maxLength={1000} name="takeaways" value={form.takeaways} onChange={update} placeholder="What are the main lessons you learned from this book? How will you apply them in daily life?" rows={3} className={`${inputText} resize-y leading-6`}/></InputBox>
              <p className="mt-2 text-right text-xs text-gray-500">{form.takeaways.length}/1000 characters</p>
            </div>

            <div>
              <FieldLabel>Upload Images (Optional)</FieldLabel>
              <p className="mb-3 text-xs text-gray-500">Upload photos of the book or notes. PNG, JPG or WEBP · Max 5MB each · Up to 5 images.</p>
              <div className="flex flex-wrap items-start gap-3">
                <label className="flex min-h-32 min-w-0 flex-1 cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-[#fbbf24] bg-[#f6eddf] p-4 text-center shadow-[inset_4px_4px_9px_#e3d8c9,inset_-4px_-4px_9px_#ffffff] transition hover:bg-[#fff5e8]">
                  <FiUploadCloud className="mb-2 text-2xl text-[#f59e0b]"/>
                  <span className="text-sm font-semibold">Click to upload images</span>
                  <span className="mt-1 text-xs text-gray-500">Select up to 5 images</span>
                  <input type="file" accept="image/png,image/jpeg,image/webp" multiple onChange={uploadImages} className="hidden"/>
                </label>
                <div className="flex flex-wrap gap-2">
                  {images.map((file, i) => (
                    <div key={`${file.name}-${i}`} className="relative h-20 w-20 overflow-hidden rounded-xl border border-white shadow-[4px_4px_10px_#dfd5c7,-4px_-4px_10px_#ffffff]">
                      <img src={URL.createObjectURL(file)} alt={file.name} className="h-full w-full object-cover"/>
                      <button type="button" onClick={() => setImages(current => current.filter((_, j) => j !== i))} className="absolute right-1 top-1 rounded-full bg-white p-1 text-amber-700 shadow-md" aria-label="Remove image"><FiX size={12}/></button>
                    </div>
                  ))}
                  {images.length < 5 && <span className="flex h-20 w-16 items-center justify-center rounded-xl border border-white bg-[#f6eddf] text-gray-400 shadow-[4px_4px_10px_#dfd5c7,-4px_-4px_10px_#ffffff]"><FiPlus/></span>}
                </div>
              </div>
            </div>

            <label className="flex cursor-pointer items-start gap-3 rounded-2xl border border-white/80 bg-[#f5ecdf] p-4 text-xs leading-5 text-gray-600 shadow-[inset_3px_3px_7px_#e3d8c9,inset_-3px_-3px_7px_#ffffff]">
              <input type="checkbox" checked={agreed} onChange={e => setAgreed(e.target.checked)} className="mt-1 accent-amber-500"/>
              <span>I agree that my submission may be reviewed and published on IYF Mayapur website to inspire others. I will keep the content respectful, authentic and in line with spiritual values. <span className="text-amber-600">*</span></span>
            </label>

            <button type="submit" className="group flex w-full items-center justify-center gap-3 rounded-2xl border border-[#f59e0b] bg-gradient-to-br from-[#fbbf24] to-[#f59e0b] px-5 py-4 font-semibold text-[#422006] shadow-[6px_6px_13px_#d5c6b5,-4px_-4px_12px_#ffffff] transition-all duration-300 hover:-translate-y-1 hover:shadow-[9px_9px_17px_#d5c6b5,-5px_-5px_14px_#ffffff] active:translate-y-0 active:shadow-inner">
              Submit Reflection <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1"/>
            </button>
          </div>
        </form>

        <aside className="space-y-5 lg:sticky lg:top-5">
          <div className={`${neoCard} p-5 sm:p-6`}>
            <h3 className="flex items-center gap-3 font-serif text-2xl"><span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f7ecdc] text-[#f59e0b] shadow-[4px_4px_9px_#dfd5c7,-4px_-4px_9px_#ffffff]"><FiFileText size={21}/></span>Submission Guidelines</h3>
            <p className="mt-3 text-sm leading-6 text-gray-600">Help us maintain a meaningful and authentic spiritual reading community.</p>
            <div className="mt-5 space-y-4">
              {guidelines.map(item => (
                <div key={item} className="flex items-start gap-3 text-sm leading-5 text-gray-700">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f7ecdc] text-[#f59e0b] shadow-[4px_4px_8px_#dfd5c7,-4px_-4px_8px_#ffffff]"><FiCheckCircle/></span>{item}
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[26px] border border-white/90 bg-gradient-to-br from-[#fff0d5] to-[#f2dfc3] p-6 shadow-[9px_9px_22px_#dfd5c7,-9px_-9px_22px_#ffffff]">
            <GiLotus className="mb-3 text-3xl text-[#f59e0b]"/>
            <p className="font-serif text-xl italic leading-7 text-[#483126]">“When you read our books, you associate with Krishna directly.”</p>
            <p className="mt-4 text-xs font-semibold tracking-widest text-[#d97706]">— SRILA PRABHUPADA</p>
          </div>

          <div className={`${neoCard} p-5 sm:p-6`}>
            <h3 className="flex items-center gap-3 font-serif text-2xl"><span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#f7ecdc] text-[#f59e0b] shadow-[4px_4px_9px_#dfd5c7,-4px_-4px_9px_#ffffff]"><FiBookOpen size={21}/></span>Popular Books to Write About</h3>
            <p className="my-3 text-sm text-gray-600">Choose a book to start your reflection.</p>
            <div className="grid grid-cols-2 gap-3">
              {books.slice(0, 4).map(book => (
                <button type="button" key={book} onClick={() => { setShowCustomBook(false); setForm(current => ({ ...current, book })); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="rounded-2xl border border-white/90 bg-[#f7efe4] p-3 text-left text-xs leading-5 shadow-[5px_5px_11px_#dfd5c7,-5px_-5px_11px_#ffffff] transition-all duration-300 hover:-translate-y-1 hover:shadow-[7px_7px_14px_#dfd5c7,-7px_-7px_14px_#ffffff]">
                  <span className="mb-3 flex h-20 items-center justify-center rounded-xl bg-[#f3e5d1] text-[#f59e0b] shadow-[inset_3px_3px_6px_#e0d2be,inset_-3px_-3px_6px_#fff9ee]"><FiBookOpen size={28}/></span>
                  <span className="font-semibold text-[#4a3428]">{book}</span>
                </button>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <footer className="bg-[#0d291e] px-5 py-10 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div><div className="font-serif text-2xl">IYF Sridham Mayapur</div><p className="mt-3 text-sm leading-6 text-white/60">Building a generation of kind, conscious and capable leaders for a better world.</p></div>
          <div><h4 className="mb-3 font-semibold text-[#f6b83f]">Quick Links</h4><div className="space-y-2 text-sm text-white/65">{["Home", "Events", "Courses", "Gallery", "Store", "Donation", "Adhyamrit"].map(x => <p key={x}>{x}</p>)}</div></div>
          <div><h4 className="mb-3 font-semibold text-[#f6b83f]">Our Services</h4><div className="space-y-2 text-sm text-white/65">{["Youth Spiritual Lodging", "Youth Spiritual Food", "Youth Counselling", "Youth Festivals", "Gita Distribution", "Spiritual Education"].map(x => <p key={x}>• {x}</p>)}</div></div>
          <div><h4 className="mb-3 font-semibold text-[#f6b83f]">Be Part of Something Meaningful</h4><p className="mb-4 text-sm text-white/65">Read, reflect and share spiritual wisdom.</p><a href="/join-us" className="inline-flex items-center gap-2 rounded-full bg-[#f5a916] px-5 py-3 text-sm font-semibold text-[#163323] shadow-[4px_4px_10px_#061a12,-3px_-3px_8px_#244535] transition hover:-translate-y-0.5">Join the Movement <FiArrowRight/></a></div>
        </div>
        <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-4 text-xs text-white/45">© IYF Sridham Mayapur. All rights reserved.</div>
      </footer>
    </main>
  );
}
