interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]> {}

// 특정 상품의 상세 정보
type ShoppingItem = Pick<Product, "id" | "name" | "price">;
function displayProductDetail(
  shoppingItem: Pick<Product, "id" | "name" | "price">
) {}

// interface UpdateProduct {
//     id? : number;
//     name? : string;
//     price? : number;
//     brand? : string;
//     stock? : number;
// }

type UpdateProduct = Partial<Product>;

// 특정 상품 정보를 업데이트하는 함수
function updateProductItem(productItem: Partial<Product>) {}

// 4. 유틸리티 타입 구현하기 - Partial
interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}

// interface UserProfileUpdate {
//   username ? : string;
//   email ? : string;
//   profilePhotoUrl? : string;
// }

// type UserProfileUpdate = {
//   username? : UserProfile['username'];
//   email? : UserProfile['email'];
//   profilePhotoUrl? : UserProfile['profilePhotoUrl'];
// }

type UserProfileUpdate = {
  [p in "username" | "email" | "profilePhotoUrl"]?: UserProfile[p];
};
