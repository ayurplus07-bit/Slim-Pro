export type Language = 'gu' | 'hi' | 'en';

export interface ProductPackage {
  id: string;
  nameGu: string;
  nameHi: string;
  nameEn: string;
  bottles: number;
  durationDays: number;
  expectedLoss: string;
  originalPrice: number;
  discountPrice: number;
  savings: number;
  isPopular?: boolean;
  isBestValue?: boolean;
  freeGiftsGu: string[];
  freeGiftsHi: string[];
  freeGiftsEn: string[];
  badgeGu?: string;
  badgeHi?: string;
  badgeEn?: string;
}

export interface Ingredient {
  id: string;
  nameGu: string;
  nameHi: string;
  nameEn: string;
  botanicalName: string;
  icon: string;
  benefitsGu: string;
  benefitsHi: string;
  benefitsEn: string;
  keyAction: string;
}

export interface TransformationStory {
  id: string;
  name: string;
  age: number;
  city: string;
  beforeWeight: number;
  afterWeight: number;
  durationWeeks: number;
  storyGu: string;
  storyHi: string;
  storyEn: string;
  gender: 'female' | 'male';
  verifiedBuyer: boolean;
  beforeImgDesc: string;
  afterImgDesc: string;
}

export interface CustomerReview {
  id: string;
  name: string;
  city: string;
  rating: number;
  date: string;
  weightLoss: string;
  commentGu: string;
  commentHi: string;
  commentEn: string;
  verified: boolean;
  packUsed: string;
  likes: number;
}

export interface OrderDetails {
  orderId: string;
  customerName: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  packageId: string;
  packageName: string;
  totalAmount: number;
  paymentMethod: 'COD' | 'ONLINE';
  orderDate: string;
  expectedDelivery: string;
}
