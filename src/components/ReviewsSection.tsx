import React, { useState } from 'react';
import { Star, ThumbsUp, CheckCircle2, MessageSquare, Send, Sparkles, UserCheck } from 'lucide-react';
import { Language, CustomerReview } from '../types';
import { CUSTOMER_REVIEWS } from '../data/productData';

interface ReviewsSectionProps {
  language: Language;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ language }) => {
  const [reviews, setReviews] = useState<CustomerReview[]>(CUSTOMER_REVIEWS);
  const [likedIds, setLikedIds] = useState<{ [key: string]: boolean }>({});
  
  // New Review Form State
  const [showAddForm, setShowAddForm] = useState(false);
  const [newName, setNewName] = useState('');
  const [newCity, setNewCity] = useState('');
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newLoss, setNewLoss] = useState('-૬ કિલો');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleLike = (id: string) => {
    if (likedIds[id]) return;
    setLikedIds((prev) => ({ ...prev, [id]: true }));
    setReviews((prev) =>
      prev.map((r) => (r.id === id ? { ...r, likes: r.likes + 1 } : r))
    );
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newComment.trim()) return;

    const added: CustomerReview = {
      id: `rev-${Date.now()}`,
      name: newName,
      city: newCity || 'અમદાવાદ',
      rating: newRating,
      date: 'હમણાં જ',
      weightLoss: newLoss,
      packUsed: '૨ મહિનાનો ટ્રાન્સફોર્મેશન પેક',
      verified: true,
      likes: 1,
      commentGu: newComment,
      commentHi: newComment,
      commentEn: newComment,
    };

    setReviews([added, ...reviews]);
    setNewName('');
    setNewCity('');
    setNewComment('');
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setShowAddForm(false);
    }, 2000);
  };

  return (
    <section className="py-10 sm:py-14 bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Rating Overview Box */}
        <div className="bg-slate-50 rounded-2xl border border-slate-200 p-5 sm:p-6 mb-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="text-center sm:text-left">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl sm:text-5xl font-black text-slate-950">૪.૯</span>
                <span className="text-sm font-bold text-slate-400">/ ૫.૦</span>
              </div>
              <div className="flex items-center gap-1 my-1 justify-center sm:justify-start">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-xs text-slate-500 font-bold">
                ૧૫,૨૦૦+ થી વધુ વેરિફાઇડ ગ્રાહક રેટિંગ્સ
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center sm:items-end gap-2">
            <button
              type="button"
              onClick={() => setShowAddForm(!showAddForm)}
              className="bg-[#631e50] hover:bg-[#4d163e] text-white px-4 py-2 rounded-xl text-xs font-bold shadow-xs flex items-center gap-1.5 transition"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{showAddForm ? 'ફોર્મ બંધ કરો' : 'તમારો અનુભવ શેર કરો'}</span>
            </button>
            <span className="text-[11px] text-emerald-700 font-bold flex items-center gap-1">
              <UserCheck className="w-3.5 h-3.5" />
              <span>૧૦૦% અસલ ગુજરાતના ગ્રાહકો</span>
            </span>
          </div>
        </div>

        {/* Add Review Accordion Form */}
        {showAddForm && (
          <form onSubmit={handleAddReview} className="bg-amber-50/50 rounded-2xl border border-amber-200 p-5 mb-8 space-y-4">
            <h3 className="text-sm font-black text-slate-900">
              સ્લિમ પ્રો પાવડર વિશે તમારો અભિપ્રાય લખો:
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">તમારું નામ</label>
                <input
                  type="text"
                  required
                  placeholder="દા.ત. મીનાબેન પટેલ"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#631e50]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">શહેર (ગુજરાત)</label>
                <input
                  type="text"
                  placeholder="દા.ત. સુરત, રાજકોટ..."
                  value={newCity}
                  onChange={(e) => setNewCity(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#631e50]"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">કેટલું વજન ઘટ્યું?</label>
                <input
                  type="text"
                  value={newLoss}
                  onChange={(e) => setNewLoss(e.target.value)}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#631e50]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">સ્ટાર રેટિંગ</label>
                <select
                  value={newRating}
                  onChange={(e) => setNewRating(Number(e.target.value))}
                  className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#631e50]"
                >
                  <option value={5}>★★★★★ (૫/૫)</option>
                  <option value={4}>★★★★☆ (૪/૫)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">તમારો અભિપ્રાય / રિવ્યૂ</label>
              <textarea
                rows={2}
                required
                placeholder="સ્લિમ પ્રો પાવડર વાપર્યા પછી તમને કેવો અનુભવ થયો..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-[#631e50]"
              />
            </div>

            <div className="flex items-center justify-between">
              {isSuccess && (
                <span className="text-xs font-bold text-emerald-700">✓ રિવ્યૂ સફળતાપૂર્વક પોસ્ટ થયો!</span>
              )}
              <button
                type="submit"
                className="ml-auto bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-2 rounded-xl text-xs font-black flex items-center gap-1.5 transition"
              >
                <Send className="w-3 h-3" />
                <span>રિવ્યૂ સબમિટ કરો</span>
              </button>
            </div>
          </form>
        )}

        {/* Customer Reviews List */}
        <div className="space-y-4">
          {reviews.map((rev) => (
            <div key={rev.id} className="bg-slate-50/70 p-4 sm:p-5 rounded-2xl border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-slate-800 text-white flex items-center justify-center font-bold text-xs">
                      {rev.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-slate-900 flex items-center gap-1">
                        <span>{rev.name}</span>
                        {rev.verified && (
                          <span className="text-emerald-600 inline-flex items-center" title="વેરિફાઇડ ખરીદદાર">
                            <CheckCircle2 className="w-3.5 h-3.5 fill-emerald-100" />
                          </span>
                        )}
                      </h4>
                      <p className="text-[11px] text-slate-500 font-medium">{rev.city}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="bg-emerald-100 text-emerald-800 text-[11px] font-black px-2 py-0.5 rounded border border-emerald-200">
                      {rev.weightLoss}
                    </span>
                    <div className="flex items-center text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed my-2">
                  "{language === 'gu' ? rev.commentGu : language === 'hi' ? rev.commentHi : rev.commentEn}"
                </p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-200 text-[11px] text-slate-500">
                <span>વાપરેલ પેક: {rev.packUsed}</span>
                
                <button
                  type="button"
                  onClick={() => handleLike(rev.id)}
                  className={`flex items-center gap-1 font-bold transition ${
                    likedIds[rev.id] ? 'text-emerald-700' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  <ThumbsUp className={`w-3.5 h-3.5 ${likedIds[rev.id] ? 'fill-emerald-700' : ''}`} />
                  <span>ઉપયોગી ({rev.likes})</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
