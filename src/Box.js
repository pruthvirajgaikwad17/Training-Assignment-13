import React from "react";
import "./Box.css";

const Box = (Obj) => {
  function show() {
    document.getElementById("modal_container").style.display = "block";
    document.getElementById("allBagsData").style.display = "none";
    var content = document.getElementById("content");
    document.getElementById("addImg").src = Obj.src;
    document.getElementById("head").innerHTML = Obj.name;
    content.innerHTML =
      "color: " +
      Obj.color +
      ", type: " +
      Obj.type +
      "\n" +
      ", price: " +
      Obj.salePrice +
      ", USD" +
      "\n" +
      ", inStock: " +
      Obj.inStock +
      "\n" +
      ", brand: " +
      Obj.brand +
      "\n" +
      ", size: " +
      Obj.size +
      "\n" +
      ", Short Description: " +
      Obj.shortDesc +
      "";
    var btn_close = document.getElementById("close");
    btn_close.addEventListener("click", () => {
      document.getElementById("allBagsData").style.display = "block";
      document.getElementById("modal_container").style.display = "none";
    });
  }

  return (
    <li
      class="kuvmProduct "
      data-id="99-98"
      data-isdeleted=""
      data-instock="yes"
      data-itemgroupid="99"
    >
      <div class="kuvmProdWrap">
        <div class="kuvmProdTop">
          <div class="kuvmImgWrap">
            <a href="javascript:void(0)" class="kuvmProductLink">
              <span class="kuvmImgSpan">
                <img src={Obj.src} alt={Obj.alt} class="kuProdImg" />
              </span>
            </a>
          </div>
        </div>
        <div class="kuvmProdBottom">
          <div class="kuvmNameDesc">
            <div class="kuvmName" data-name={Obj.alt}>
              <a href="javascript:void(0)" class="kuvmProductLink">
                {Obj.alt}
              </a>
            </div>
            <div class="kuvmsku" data-sku={Obj.sku}>
              <small class="text-muted">{Obj.sku}</small>
            </div>
          </div>
          <div class="kuPrice">
            <div class="kuSalePrice kuStartPrice">{Obj.salePrice} EUR</div>
            <button
              id={Obj.id}
              onClick={() => {
                show();
              }}
            >
              Show Information
            </button>
            <div class="kuClearBoth"></div>
          </div>
        </div>
        <div class="kuvmClearLeft"></div>
      </div>
    </li>
  );
};

export default Box;
