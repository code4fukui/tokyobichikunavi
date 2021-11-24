import { CSV } from "https://js.sabae.cc/CSV.js";
import { fix0 } from "https://js.sabae.cc/fix0.js";
import { stockpileList, petStockpileList } from "../stockpile.config.js";

console.log(stockpileList);

const conv = (list, imgpath, imgoffset = 0, pet = "") => {
  return list.map(s => {
    return {
      id: s.id,
      item_ja: s.item.ja,
      unit_ja: s.unit?.ja,
      category_ja: s.category.ja,
      image: imgpath + "/img-" + fix0(s.id - imgoffset, 2) + ".png",
      description_ja: s.description.ja,
      item_en: s.item.en,
      unit_en: s.unit?.en,
      category_en: s.category.en,
      description_en: s.description.en,
      infantsMale: s.required?.infantsMale,
      infantsFemale: s.required?.infantsFemale,
      child1Male: s.required?.child1Male,
      child1Female: s.required?.child1Female,
      child2Male: s.required?.child2Male,
      child2Female: s.required?.child2Female,
      adultMale: s.required?.adultMale,
      adultFemale: s.required?.adultFemale,
      agedMale: s.required?.agedMale,
      agedFemale: s.required?.agedFemale,
      pet: pet,
      url_yahoo: s.url?.yahoo || "",
      url_rakuten: s.url?.rakuten || "",
      url_amazon: s.url?.amazon || "",
    }
  });
};

const base = "https://code4fukui.github.io/tokyobichikunavi/";
const data = conv(stockpileList, base + "src/assets/images/tool/result/stockpile");
const data2 = data.concat(conv(petStockpileList, base + "src/assets/images/tool/result/stockpile/pet", data.length, 1));

await Deno.writeTextFile("stockpile_list.csv", CSV.stringify(data2));
