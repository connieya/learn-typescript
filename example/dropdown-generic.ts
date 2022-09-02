interface DropDownItem<T> {
    value : T;
    selected : boolean;
}

interface Email {
    value : string;
    selected : boolean;
}

const emails: DropDownItem<string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];

interface ProductNumber {
    value : number;
    selected : boolean;
}

interface TrueFalse {
    value : boolean;
    selected : boolean;
}

const numberOfProducts:DropDownItem<number>[]  = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

function createDropdownItem(item:  DropDownItem<string> | DropDownItem<number>) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem(email);
  const selectTag = document.querySelector('#email-dropdown');
//   selectTag.appendChild(item);
});

numberOfProducts.forEach(function (product){

})

interface Dropdown<T> {
    value :T;
    selectd : boolean;
}

// const oct : Dropdown<string> = {value: "abc" , selected : false};



