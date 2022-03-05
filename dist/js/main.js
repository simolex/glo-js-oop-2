(()=>{"use strict";class t{constructor(){this._events={}}subscribe(t,e){return(this._events[t]||(this._events[t]=[])).push(e),this}emit(t,e){(this._events[t]||[]).slice().forEach((t=>t(e)))}}class e{constructor({unitName:t,unitBrand:e,unitModel:i,unitNumber:n,unitDate:s,unitType:o}){this._unitName=t,this._unitBrand=e,this._unitModel=i,this._unitNumber=n,this._unitDate=s,this._unitType=o}set unitName(t){this._unitName=t}get unitName(){return this._unitName}set unitBrand(t){this._unitBrand=t}get unitBrand(){return this._unitBrand}set unitModel(t){this._unitModel=t}get unitModel(){return this._unitModel}set unitNumber(t){this._unitNumber=t}get unitNumber(){return this._unitNumber}set unitDate(t){this._unitDate=t}get unitDate(){return this._unitDate}set unitType(t){this._unitType=t}get unitType(){return this._unitType}toJSON(){return{nameEquip:this._nameEquip,brandEquip:this._brandEquip,modelEquip:this._modelEquip,numberEquip:this._numberEquip,dateEquip:this._dateEquip,unitType:this._unitType}}}class i extends e{constructor({unitName:t,unitBrand:e,unitModel:i,unitNumber:n,unitDate:s,unitType:o,pcMemory:u,pcCpu:r,pcHdd:a}){super({unitName:t,unitBrand:e,unitModel:i,unitNumber:n,unitDate:s,unitType:o}),this._pcMemory=u||"",this._pcCpu=r||"",this._pcHdd=a||""}set pcMemory(t){this._pcMemory=t}get pcMemory(){return this._pcMemory}set pcCpu(t){this._pcCpu=t}get pcCpu(){return this._pcCpu}set pcHdd(t){this._pcHdd=t}get pcHdd(){return this._pcHdd}toJSON(){return{unitName:this._unitName,unitBrand:this._unitBrand,unitModel:this._unitModel,unitNumber:this._unitNumber,unitDate:this._unitDate,unitType:this._unitType,pcMemory:this._pcMemory,pcCpu:this._pcCpu,pcHdd:this._pcHdd}}}class n extends e{constructor({unitName:t,unitBrand:e,unitModel:i,unitNumber:n,unitDate:s,unitType:o,printTechnology:u,mediaSize:r,printColor:a}){super({unitName:t,unitBrand:e,unitModel:i,unitNumber:n,unitDate:s,unitType:o}),this._printTechnology=u||"",this._mediaSize=r||"",this._printColor=a||""}set printTechnology(t){this._printTechnology=t}get printTechnology(){return this._printTechnology}set mediaSize(t){this._mediaSize=t}get mediaSize(){return this._mediaSize}set printColor(t){this._printColor=t}get printColor(){return this._printColor}toJSON(){return{unitName:this._unitName,unitBrand:this._unitBrand,unitModel:this._unitModel,unitNumber:this._unitNumber,unitDate:this._unitDate,unitType:this._unitType,printTechnology:this._printTechnology,mediaSize:this._mediaSize,printColor:this._printColor}}}class s extends e{constructor({unitName:t,unitBrand:e,unitModel:i,unitNumber:n,unitDate:s,unitType:o,monitorSize:u,monitorResolution:r}){super({unitName:t,unitBrand:e,unitModel:i,unitNumber:n,unitDate:s,unitType:o}),this._monitorSize=u||"",this._monitorResolution=r||""}set monitorSize(t){this._monitorSize=t}get monitorSize(){return this._monitorSize}set monitorResolution(t){this._monitorResolution=t}get monitorResolution(){return this._monitorResolution}toJSON(){return{unitName:this._unitName,unitBrand:this._unitBrand,unitModel:this._unitModel,unitNumber:this._unitNumber,unitDate:this._unitDate,unitType:this._unitType,monitorSize:this._monitorSize,monitorResolution:this._monitorResolution}}}class o{constructor(t="type_computer"){this._content=document.getElementById("modal-form"),this._formControl=document.getElementById("equipment-form"),this._unitType=document.getElementById("unit-type"),this._allSecondForms=document.querySelectorAll(".modal__subtype"),this._content.addEventListener("click",(t=>{(!t.target.closest(".modal")&&t.target.classList.contains("overlay")||t.target.closest(".modal-close"))&&this.hide()})),this._unitType.addEventListener("change",(t=>{this._showSecondForm(t.target.value)})),this._showSecondForm(t),this._formControl.addEventListener("submit",(t=>{t.preventDefault(),new FormData(this._formControl),this.hide()})),this._formControl.addEventListener("formdata",(t=>{this._onSave(t.formData)}))}_showSecondForm(t){this._allSecondForms.forEach((e=>{t===e.id?e.style.display="":e.style.display="none"}))}show(t,e){this._onSave=t,this._onError=e,this._content.style.display="flex"}hide(){this._onSave(!1),this._content.style.display=""}}const u=new class extends t{constructor(t){super(),this._rowList=t||[],localStorage.getItem("equipments")&&JSON.parse(localStorage.getItem("equipments")).forEach((t=>{this.addRow(t)}))}getRows(){return this._rowList.slice()}addRow(t){let e;switch(t.unitType){case"type_computer":e=new i(t);break;case"type_monitor":e=new s(t);break;case"type_printer":e=new n(t);break;default:e={}}this._rowList.push(e),localStorage.setItem("equipments",JSON.stringify(this._rowList)),this.emit("rowAdded",e)}removeRow(t){const e=this._rowList.splice(t,1)[0];localStorage.setItem("equipments",JSON.stringify(this._rowList)),this.emit("rowRemoved",e)}},r=new class extends t{constructor(t,e){super(),this._model=t,this._elements=e,this._typeEquipments=[...e.typeEquipments.options].reduce(((t,e)=>{if(e.value)return t[e.value]=e.innerText,t}),[]),t.subscribe("rowAdded",(()=>this.rebuildTable())).subscribe("rowRemoved",(()=>this.rebuildTable())),e.tableBody.addEventListener("click",(t=>{if(t.target.closest(".table__row")){const e=t.target.closest(".table__row").id;t.target.closest(".table__button.remove")&&this.emit("delButtonClicked",e)}})),e.addButton.addEventListener("click",(()=>this.emit("addButtonClicked")))}show(){this.rebuildTable()}rebuildTable(){this._elements.tableBody.innerHTML="",this._model.getRows().forEach(((t,e)=>{const i=document.createElement("tr");i.classList.add("table__row"),i.id=e,i.innerHTML=`\n                <td class="table__cell">${t.unitName}</td>\n                <td class="table__cell">${t.unitBrand}</td>\n                <td class="table__cell">${t.unitModel}</td>\n                <td class="table__cell">${t.unitNumber}</td>\n                <td class="table__cell">${t.unitDate}</td>\n                <td class="table__cell">${this._typeEquipments[t.unitType]}</td>\n                <th class="table__title">\n                  <div class="table__button remove">\n                    <img class="table__img" src="img/trash-can.svg" alt="" />\n                  </div>\n               </th>\n      `,this._elements.tableBody.append(i)}))}}(u,{typeEquipments:document.getElementById("unit-type"),tableBody:document.querySelector(".main__table tbody"),addButton:document.getElementById("add-equipment")});new class{constructor(t,e){this._model=t,this._view=e,e.subscribe("addButtonClicked",(()=>this.addItem())),e.subscribe("delButtonClicked",(t=>this.delItem(t)))}addItem(){const t=new o;new Promise(((e,i)=>t.show(e,i))).then((t=>{if(t){const e=[...t].reduce(((t,e)=>{let i=e[0];if(i)return i=i.split("-").reduce(((t,e,i)=>(i>0&&(e=e[0].toUpperCase()+e.substring(1)),t+e)),""),t[i]=e[1],t}),{});this._model.addRow(e)}})).catch((t=>{console.log(t)}))}delItem(t){this._model.removeRow(t)}}(u,r),r.show()})();