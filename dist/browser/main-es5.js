(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/generate-invoice/generate-invoice.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/generate-invoice/generate-invoice.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" id=\"invoice-page\">\n  <div class=\"row\">\n    <div class=\"col-md-3\">\n\n      <mat-card class=\"example-card currency-cart\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title>Currency</mat-card-title>\n        </mat-card-header>\n        \n        <mat-card-content class=\"\">\n          <mat-form-field>\n            <select [(ngModel)]=\"currencySelected\" (change)=\"currencySelectedTypeChange($event.target.value)\">\n                <option value=\"usd\" selected>USD</option>\n              <option *ngFor=\"let currency of currencys\" [value]=\"currency.symbol\" >\n                {{currency.name}}\n              </option>\n            </select>\n            <br>\n            <input type=\"checkbox\" [(ngModel)]=\"isChecked\" ><span>Unambiguous currency.</span>\n          </mat-form-field>\n        </mat-card-content>\n        \n      </mat-card>\n\n\n\n      <mat-card class=\"example-card discount-cart\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title>Discount</mat-card-title>\n        </mat-card-header>\n        \n        <mat-card-content>\n            <select [(ngModel)]=\"discountSelected\" (change)=\"discountTypeChange($event.target.value)\">\n              <option  value=\"flat\" selected>Flat Discounr</option>\n              <option  value=\"persantage\" >% Discount</option>\n              <option  value=\"off\" >Off</option>\n            </select>\n        </mat-card-content>\n        \n      </mat-card>\n\n\n\n      <mat-card class=\"example-card shipping-cart\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title>Shipping</mat-card-title>\n        </mat-card-header>\n        \n        <mat-card-content>\n            <select [(ngModel)]=\"shippingSelected\" (change)=\"shippingTypeChange($event.target.value)\">\n                <option  value=\"on\" >On</option>\n                <option  value=\"off\" >Off</option>\n              </select>\n        </mat-card-content>\n        \n      </mat-card>\n\n\n\n      <mat-card class=\"example-card tax-cart\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title>Tax</mat-card-title>\n        </mat-card-header>\n        \n        <mat-card-content *ngIf=\"taxSelected\">\n            <select [(ngModel)]=\"taxSelected\" (change)=\"taxTypeChange($event.target.value)\">\n                <option  value=\"vat\" >VAT</option>\n                <option  value=\"flat\" >Flat Tax</option>\n                <option  value=\"persantage\" >% Tax</option>\n                <option  value=\"off\" >Off</option>\n              </select>\n        </mat-card-content>\n        \n      </mat-card>\n\n\n\n      <mat-card class=\"example-card downloar-invoice-cart\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <button mat-raised-button color=\"primary\" class=\"add-row\" (click)=\"createPdf()\">Download Invoice</button>\n        </mat-card-header>\n      \n      </mat-card>\n\n\n\n      <mat-card class=\"example-card save-data-cart\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title>Saved Data</mat-card-title>\n        </mat-card-header>\n        \n        <mat-card-content>\n            <button mat-raised-button color=\"warn\" class=\"add-row\" (click)=\"deleteLocalData()\">Delete Local Data</button>\n         <p>Free Invoice Generator does not store any of your settings on its servers. Instead, all of your settings are saved to your browser through the LocalStorage mechanism. Clicking the above button will delete the data that Free Invoice Generator has saved to your computer so far. Note: the invoices\n            are generated server-side where they are kept for up to 10 minutes before they are garbage-collected.</p>\n        </mat-card-content>\n        \n      </mat-card>\n\n\n\n      <mat-card class=\"example-card get-update-cart\">\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title>Get Updates</mat-card-title>\n        </mat-card-header>\n        \n        <mat-card-content>\n         <p>Enter your e-mail address below if you'd like to receive updates whenever we launch a new feature!</p>\n\n         <form>\n           <input type=\"email\" name=\"email\" placeholder=\"Your email address\">\n           <button mat-raised-button color=\"primary\" class=\"add-row\" >Subscribe</button>\n         </form>\n        </mat-card-content>\n        \n      </mat-card>\n\n\n    </div>\n    <div class=\"col-md-9\">\n      \n      \n\n\n      <mat-card class=\"example-card main-cart\" id=\"main-invoice\">\n        <mat-card-header class=\"heading\">\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          \n          <mat-card-subtitle >Everything below this point is editable. Click on things and go crazy!</mat-card-subtitle>\n        </mat-card-header>\n      \n        <mat-card-content>\n          <div class=\"row\">\n            <div class=\"col-md-9\">\n\n              <h4>From</h4>\n              <input type=\"text\" class=\"table-input-form\" placeholder=\"Name\"  [(ngModel)]=\"fromAddress.name\" (keyup)=\"updateFromAddress()\">\n              <input type=\"text\" class=\"table-input-form\" placeholder=\"Cpmpany\"  [(ngModel)]=\"fromAddress.company\" (keyup)=\"updateFromAddress()\">\n              <input type=\"text\" class=\"table-input-form\" placeholder=\"Address\" [(ngModel)]=\"fromAddress.address\" (keyup)=\"updateFromAddress()\">\n              <input type=\"text\" class=\"table-input-form\" placeholder=\"City, State, Zip\" [(ngModel)]=\"fromAddress.city_zip\" (keyup)=\"updateFromAddress()\">\n              \n              <input type=\"text\" class=\"table-input-form\" placeholder=\"Country\" [(ngModel)]=\"fromAddress.country\" (keyup)=\"updateFromAddress()\">\n\n\n            </div>\n\n            <div class=\"col-md-3\">\n              <h2>INVOICE</h2>\n              </div>\n          </div>\n\n\n\n\n\n\n\n          <div class=\"row\">\n              <div class=\"col-md-8\">\n  \n              <h4>To</h4>\n              <input type=\"text\" class=\"table-input-form\" placeholder=\"Company\" [(ngModel)]=\"toAddress.name\" (keyup)=\"updateToAddress()\">\n              <input type=\"text\" class=\"table-input-form\" placeholder=\"Address\" [(ngModel)]=\"toAddress.address\" (keyup)=\"updateToAddress()\">\n              <input type=\"text\" class=\"table-input-form\" placeholder=\"City, State, Zip\" [(ngModel)]=\"toAddress.city_zip\" (keyup)=\"updateToAddress()\">\n              <input type=\"text\" class=\"table-input-form\" placeholder=\"Country\" [(ngModel)]=\"toAddress.country\" (keyup)=\"updateToAddress()\">\n              \n              </div>\n  \n              <div class=\"col-md-4\">\n                <div class=\"row\">\n                  <div class=\"col-md-5\"><span>INVOICE#</span></div>\n                  <div class=\"col-md-7\"><input type=\"text\" class=\"table-input-form\" [(ngModel)]=\"invoiceData.invoiceName\" (keyup)=\"updateInvoiceData()\"></div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-md-5\"><span>Invoice Date</span></div>\n                    <div class=\"col-md-7\"><input type=\"text\" class=\"table-input-form\"  [(ngModel)]=\"invoiceData.invoiceDate\" (keyup)=\"updateInvoiceData()\"></div>\n                  </div>\n\n                  <div class=\"row\">\n                      <div class=\"col-md-5\"><span>Due Date</span></div>\n                      <div class=\"col-md-7\"><input type=\"text\" class=\"table-input-form\" [(ngModel)]=\"invoiceData.dueDate\" (keyup)=\"updateInvoiceData()\"></div>\n                    </div>\n                </div>\n            </div>\n\n\n\n\n\n\n\n\n            <div class=\"row\">\n\n                <table class=\"table\">\n                    <thead>\n                      <tr>\n                        <th scope=\"col\">Action</th>\n                        <th scope=\"col\">Item</th>\n                        <th scope=\"col\">HRS/QTY</th>\n                        <th scope=\"col\">Rate</th>\n                        <th scope=\"col\" *ngIf=\"taxSelected=='vat'\">Vat</th>\n                        <th scope=\"col\">Amount</th>\n                      </tr>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\" let item of itemsData\" >\n                        <td>\n                          <a (click)=\"removeRow(item.id)\">\n                              <img src=\"../../assets/icons/delete.svg\" class=\"delete-icon\">\n                          </a>\n                        </td>\n                        <td>\n                          <input type=\"text\" class=\"table-input-form\" [(ngModel)]=\"item.itemName\" (keyup)=\"updateProductData()\">\n                        \n                        </td>\n\n                        <td>\n                            <input type=\"text\" class=\"table-input-form\" [(ngModel)]=\"item.itexQuantity\" (keyup)=\"updateProductData()\">\n                          </td>\n\n                          <td class=\"currency-symbol\">\n                              <input type=\"text\" class=\"table-input-form input-with-symbol\" [(ngModel)]=\"item.itemRate\" (keyup)=\"updateProductData()\">\n                              <span>{{currencySelected}}</span>\n                            </td>\n\n                            <td *ngIf=\"taxSelected=='vat'\">\n                                <input type=\"text\" class=\"table-input-form input-with-symbol\" [(ngModel)]=\"item.itemVat\" (keyup)=\"updateProductData()\"  >\n                                <span>{{currencySelected}}</span>\n                             </td>\n                             <td>\n                                <input type=\"text\" class=\"table-input-form input-with-symbol\" [(ngModel)]=\"item.amount\" (keyup)=\"updateProductData()\">\n                                <span>{{currencySelected}}</span>\n                             </td>\n                        \n                        \n                      </tr>\n                    \n                     \n                    </tbody>\n                  </table>\n\n            </div>\n            <hr>\n\n\n            <form >\n              <button mat-raised-button color=\"primary\" class=\"add-row\" (click)=\"addNewRow()\">+ Add Item</button>\n            </form>\n\n\n\n            <div class=\"row\">\n\n              <div class=\"col-md-8\">\n          \n              </div>\n              <div class=\"col-md-4\" *ngIf=\"totalAmounts\">\n                  <div class=\"row\">\n                      <div class=\"col-md-5\"><span>Subtotal</span></div>\n                      <div class=\"col-md-7\"><input type=\"text\" class=\"table-input-form input-with-symbol\"  [(ngModel)]=\"totalAmounts.subTotal\" (keyup)=\"updateTotalAmounts()\">\n                        <span>{{currencySelected}}</span>\n                      </div>\n                    </div>\n                    <div class=\"row\" *ngIf=\"discountSelected!=='off'\">\n                        <div class=\"col-md-5\"><span>Discount</span></div>\n                        <div class=\"col-md-7\"><input type=\"text\" class=\"table-input-form input-with-symbol\" [(ngModel)]=\"totalAmounts.discount\" (keyup)=\"updateTotalAmounts()\">\n                          <span>{{currencySelected}}</span>\n                        </div>\n                      </div>\n                      <div class=\"row\" *ngIf=\"shippingSelected!=='off'\">\n                          <div class=\"col-md-5\"><span>Shipping</span></div>\n                          <div class=\"col-md-7\"><input type=\"text\" class=\"table-input-form input-with-symbol\" [(ngModel)]=\"totalAmounts.shipping\" (keyup)=\"updateTotalAmounts()\">\n                            <span>{{currencySelected}}</span>\n                          </div>\n                        </div>\n                        <div class=\"row\" *ngIf=\"taxSelected!=='off'\">\n                            <div class=\"col-md-5\" *ngIf=\"vatOrTax\"><span>{{vatOrTax}}</span></div>\n                            <div class=\"col-md-7\"><input type=\"text\" class=\"table-input-form input-with-symbol\" [(ngModel)]=\"totalAmounts.vat\" (keyup)=\"updateTotalAmounts()\">\n                              <span>{{currencySelected}}</span>\n                            </div>\n                          </div>\n                          <div class=\"row\">\n                              <div class=\"col-md-5\"><span>Total</span></div>\n                              <div class=\"col-md-4\"><input type=\"text\" class=\"table-input-form input-with-symbol\" [(ngModel)]=\"totalAmounts.total\" (keyup)=\"updateTotalAmounts()\">\n                                <span>{{currencySelected}}</span>\n                              </div>\n                              <div class=\"col-md-3\" *ngIf=\"isChecked\" style=\"font-weight: bold;\">({{currencySelected}})</div>\n                            </div>\n                  \n              </div>\n            </div>\n\n        </mat-card-content>\n      </mat-card>\n\n\n\n\n    </div>\n  </div>\n</div>\n\n\n\n<div class=\"only-for-print\">\n  <div id=\"final-invoice\" > \n    <div style=\" position: relative;\" >\n  \n        <div style=\" padding: 20px 50px; width: 50%;\" *ngIf=\"fromAddress\">\n            <h4 style=\"font-weight: bold;\">From</h4>\n            <span>{{fromAddress.name}}</span><br>\n            <span>{{fromAddress.company}}</span><br>\n            <span>{{fromAddress.address}}</span><br>\n            <span>{{fromAddress.city_zip}}</span><br>\n            <span>{{fromAddress.country}}</span>\n            \n        </div>\n  \n  \n        <div style=\"  text-align: right;text-align: right;width: 50%;position: absolute;top: 0px;right: 0px;\">\n            <h3 style=\" text-align: right; padding: 20px 50px;font-weight: bold;\">\n                INVOICE\n            </h3>\n        </div>\n  \n    </div>\n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n    <div style=\" position: relative;\">\n  \n            <div style=\" padding: 20px 50px; width: 50%\" *ngIf=\"toAddress\">\n                <h4 style=\"font-weight: bold;\">To</h4>\n                <span>{{toAddress.name}}</span><br>\n                <span>{{toAddress.address}} </span><br>\n                <span>{{toAddress.city_zip}}</span><br>\n                <span>{{toAddress.country}}</span>\n                \n                \n            </div>\n    \n    \n            <div style=\"width: 50%;position: absolute;top: 0;right: 0;\" *ngIf=\"invoiceData\">\n                <div style=\"text-align: right; padding: 20px 50px;\">\n                        <span><b>Invoice#</b><small style=\"margin-left: 20px;font-size: 15px;\">{{invoiceData.invoiceName}}</small></span><br>\n                        <span><b>Invoice Date</b><small style=\"margin-left: 20px;font-size: 15px;\">{{invoiceData.invoiceDate}}</small></span><br>\n                        <span><b>Due Date</b><small style=\"margin-left: 20px;font-size: 15px;\">{{invoiceData.dueDate}}</small></span>\n  \n                </div>\n                \n            </div>\n    \n    </div>\n  \n  \n  \n  \n    <div style=\" padding: 20px 50px;\">\n  \n            <table id=\"customers\" style=\"width: 100%;border-collapse: collapse;width: 100%;\" *ngIf=\"itemsData\">\n                    <tr>\n                            <th style=\"width: 20%;\">Item</th>\n                            <th style=\"width: 20%;\">HRS/QTY</th>\n                            <th style=\"width: 20%;\">Rate</th>\n                            <th  style=\"width: 20%;\" *ngIf=\"taxSelected=='vat'\">Vat</th>\n                            <th style=\"width: 20%;\">Amount</th>\n                    </tr>\n  \n  \n                    <tr *ngFor=\" let item of itemsData\">\n                        <td style=\"width: 20%; text-align: left;\">{{item.itemName}}</td>\n                        <td style=\"width: 20%; text-align: center;\">{{item.itexQuantity}}</td>\n                        <td style=\"width: 20%; text-align: center;\">{{item.itemRate}} {{currencySelected}}</td>\n  \n                        <td *ngIf=\"taxSelected=='vat'\" style=\"width: 20%; text-align: center;\">{{item.itemVat}} {{currencySelected}}</td>\n                        <td style=\"width: 20%; text-align: center;\">{{item.amount}} {{currencySelected}}</td>\n                    </tr>\n            \n            </table>\n  \n  \n    </div>\n  \n  \n  \n    <div style=\" padding: 20px 50px;\">\n  \n        <div style=\" padding: 20px 50px;\"></div>\n        <div style=\" padding: 20px 50px;\" *ngIf=\"totalAmounts\">\n            <div style=\"text-align: right\">\n  \n                    <span><b>Subtotal</b><small style=\"    margin-left: 20px;font-size: 15px; text-align: right;\">{{totalAmounts.subTotal}} {{currencySelected}}</small></span><br>\n                    <span *ngIf=\"discountSelected!=='off'\"><b> Discount</b><small style=\"margin-left: 20px;font-size: 15px;\">{{totalAmounts.discount}} {{currencySelected}}</small></span><br>\n                    <span *ngIf=\"shippingSelected!=='off'\"><b>Shipping</b><small style=\" margin-left: 20px;font-size: 15px;\">{{totalAmounts.shipping}} {{currencySelected}}</small></span><br>\n                    <span *ngIf=\"taxSelected!=='off'\"> <b>VAT</b><small  style=\"margin-left: 20px;font-size: 15px;\">{{totalAmounts.vat}} {{currencySelected}}</small></span><br>\n                    <span><b>Total</b><small  style=\"margin-left: 20px;font-size: 15px;\">{{totalAmounts.total}} ({{currencySelected}})</small></span>\n            </div>\n        \n                \n        </div>\n    </div>\n  \n  \n  \n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/get-pdf/get-pdf.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/get-pdf/get-pdf.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div>\n    <div style=\"width: 100%;float: left;\">\n\n        <div style=\"width: 50%;float: left; padding: 20px 50px;\">\n            <h4 style=\"font-weight: bold;\">From</h4>\n            <span>Maniruzzaman Nayem</span><br>\n            <span>Paybuddy Limited</span><br>\n            <span>House#10, Road#18</span><br>\n            <span>Nikunja-2, Dhaka, 1229</span><br>\n            <span>Bangladesh</span>\n            \n        </div>\n\n\n        <div style=\"width: 50%; float: left;\">\n            <h3 style=\"    text-align: right; padding: 20px 50px;font-weight: bold;\">\n                INVOICE\n            </h3>\n        </div>\n\n    </div>\n\n\n\n\n\n\n\n\n\n\n\n    <div style=\"width: 100%; float: left;\">\n\n            <div style=\"width: 50%;float: left; padding: 20px 50px;\">\n                <h4 style=\"font-weight: bold;\">To</h4>\n                <span>Maniruzzaman Nayem</span><br>\n                <span>Paybuddy Limited</span><br>\n                <span>House#10, Road#18</span><br>\n                <span>Nikunja-2, Dhaka, 1229</span><br>\n                <span>Bangladesh</span>\n                \n            </div>\n    \n    \n            <div style=\"width: 50%; float: left;\">\n                <div style=\"text-align: right; padding: 20px 50px;\">\n                        <span><b>Invoice#</b><small style=\"margin-left: 20px;font-size: 15px;\">INV-0001</small></span><br>\n                        <span><b>Invoice Date</b><small style=\"margin-left: 20px;font-size: 15px;\">2019-6-25</small></span><br>\n                        <span><b>Due Date</b><small style=\"margin-left: 20px;font-size: 15px;\">2019-6-25</small></span>\n\n                </div>\n                \n            </div>\n    \n    </div>\n\n\n\n\n    <div style=\"width: 100%;float: left; padding: 20px 50px;\">\n\n            <table id=\"customers\">\n                    <tr>\n                            <th >Item</th>\n                            <th >HRS/QTY</th>\n                            <th >Rate</th>\n                            <th  >Vat</th>\n                            <th >Amount</th>\n                    </tr>\n\n\n                    <tr>\n                        <td>Motol 10w30</td>\n                        <td>2</td>\n                        <td>100</td>\n\n                        <td>20</td>\n                        <td>200</td>\n                    </tr>\n\n                    <tr>\n                            <td>Motol 10w30</td>\n                            <td>2</td>\n                            <td>100</td>\n    \n                            <td>20</td>\n                            <td>200</td>\n                        </tr>\n\n                        <tr>\n                                <td>Motol 10w30</td>\n                                <td>2</td>\n                                <td>100</td>\n        \n                                <td>20</td>\n                                <td>200</td>\n                            </tr>\n\n                            <tr>\n                                    <td>Motol 10w30</td>\n                                    <td>2</td>\n                                    <td>100</td>\n            \n                                    <td>20</td>\n                                    <td>200</td>\n                                </tr>\n            \n            </table>\n\n\n    </div>\n\n\n\n    <div style=\"width: 100%;float: left; padding: 20px 50px;\">\n\n        <div style=\"width: 50%; float:left;padding: 20px 50px;\"></div>\n        <div style=\"width: 50%; float:left;padding: 20px 50px;\">\n            <div style=\"text-align: right\">\n\n                    <span><b>Subtotal</b><small style=\"    margin-left: 20px;font-size: 15px; text-align: right;\">100 Tk</small></span><br>\n                    <span><b> Discount</b><small style=\"margin-left: 20px;font-size: 15px;\">10 Tk</small></span><br>\n                    <span><b>Shipping</b><small style=\" margin-left: 20px;font-size: 15px;\">20 Tk</small></span><br>\n                    <span> <b>VAT</b><small  style=\"margin-left: 20px;font-size: 15px;\">20Tk</small></span><br>\n                    <span><b>Total</b><small  style=\"margin-left: 20px;font-size: 15px;\">200 Tk</small></span>\n            </div>\n        \n                \n        </div>\n    </div>\n\n\n\n</div> -->\n\n\n\n\n\n<div id=\"final-invoice\" > \n    <div style=\" position: relative;\" >\n  \n        <div style=\" padding: 20px 50px; width: 50%;\">\n            <h4 style=\"font-weight: bold;\">From</h4>\n            <span>Maniruzzaman Nayem</span><br>\n            <span>Paybuddy Limited</span><br>\n            <span>House#10, Road#18</span><br>\n            <span>Nikunja-2, Dhaka, 1229</span><br>\n            <span>Bangladesh</span>\n            \n        </div>\n  \n  \n        <div style=\"  text-align: right;text-align: right;width: 50%;position: absolute;top: 0px;right: 0px;\">\n            <h3 style=\" text-align: right; padding: 20px 50px;font-weight: bold;\">\n                INVOICE\n            </h3>\n        </div>\n  \n    </div>\n  \n  \n  \n  \n  \n  \n  \n  \n  \n  \n    <div style=\" position: relative;\">\n  \n            <div style=\" padding: 20px 50px; width: 50%\">\n                <h4 style=\"font-weight: bold;\">To</h4>\n                <span>Maniruzzaman Nayem</span><br>\n                <span>Paybuddy Limited</span><br>\n                <span>House#10, Road#18</span><br>\n                <span>Nikunja-2, Dhaka, 1229</span><br>\n                <span>Bangladesh</span>\n                \n            </div>\n    \n    \n            <div style=\"width: 50%;position: absolute;top: 0;right: 0;\">\n                <div style=\"text-align: right; padding: 20px 50px;\">\n                        <span><b>Invoice#</b><small style=\"margin-left: 20px;font-size: 15px;\">INV-0001</small></span><br>\n                        <span><b>Invoice Date</b><small style=\"margin-left: 20px;font-size: 15px;\">2019-6-25</small></span><br>\n                        <span><b>Due Date</b><small style=\"margin-left: 20px;font-size: 15px;\">2019-6-25</small></span>\n  \n                </div>\n                \n            </div>\n    \n    </div>\n  \n  \n  \n  \n    <div style=\" padding: 20px 50px;\">\n  \n            <table id=\"customers\" style=\"width: 100%;border-collapse: collapse;width: 100%;\">\n                    <tr>\n                            <th style=\"width: 20%;\">Item</th>\n                            <th style=\"width: 20%;\">HRS/QTY</th>\n                            <th style=\"width: 20%;\">Rate</th>\n                            <th  style=\"width: 20%;\">Vat</th>\n                            <th style=\"width: 20%;\">Amount</th>\n                    </tr>\n  \n  \n                    <tr>\n                        <td style=\"width: 20%; text-align: center;\">Motol 10w30</td>\n                        <td style=\"width: 20%; text-align: center;\">2</td>\n                        <td style=\"width: 20%;\">100</td>\n  \n                        <td style=\"width: 20%; text-align: center;\">20</td>\n                        <td style=\"width: 20%; text-align: center;\">200</td>\n                    </tr>\n            \n            </table>\n  \n  \n    </div>\n  \n  \n  \n    <div style=\" padding: 20px 50px;\">\n  \n        <div style=\" padding: 20px 50px;\"></div>\n        <div style=\" padding: 20px 50px;\">\n            <div style=\"text-align: right\">\n  \n                    <span><b>Subtotal</b><small style=\"    margin-left: 20px;font-size: 15px; text-align: right;\">100 Tk</small></span><br>\n                    <span><b> Discount</b><small style=\"margin-left: 20px;font-size: 15px;\">10 Tk</small></span><br>\n                    <span><b>Shipping</b><small style=\" margin-left: 20px;font-size: 15px;\">20 Tk</small></span><br>\n                    <span> <b>VAT</b><small  style=\"margin-left: 20px;font-size: 15px;\">20Tk</small></span><br>\n                    <span><b>Total</b><small  style=\"margin-left: 20px;font-size: 15px;\">200 Tk</small></span>\n            </div>\n        \n                \n        </div>\n    </div>\n  \n  \n  \n  </div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align: center\">\n    <h2>Welcome to Angular App</h2>\n<a routerLink=\"/invoice\">Invoice Generator</a><br><br>\n<a routerLink=\"/pdf\"> Sample Invoice</a>\n</div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _generate_invoice_generate_invoice_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generate-invoice/generate-invoice.component */ "./src/app/generate-invoice/generate-invoice.component.ts");
/* harmony import */ var _get_pdf_get_pdf_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./get-pdf/get-pdf.component */ "./src/app/get-pdf/get-pdf.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");






var routes = [
    { path: 'invoice', component: _generate_invoice_generate_invoice_component__WEBPACK_IMPORTED_MODULE_3__["GenerateInvoiceComponent"] },
    { path: 'pdf', component: _get_pdf_get_pdf_component__WEBPACK_IMPORTED_MODULE_4__["GetPdfComponent"] },
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: '**', redirectTo: '/' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* AppComponent's private CSS styles */\nh1 {\n  font-size: 1.2em;\n  color: #999;\n  margin-bottom: 0;\n}\nh2 {\n  font-size: 2em;\n  margin-top: 0;\n  padding-top: 0;\n}\nnav a {\n  padding: 5px 10px;\n  text-decoration: none;\n  margin-top: 10px;\n  display: inline-block;\n  background-color: #eee;\n  border-radius: 4px;\n}\nnav a:visited, a:link {\n  color: #607D8B;\n}\nnav a:hover {\n  color: #039be5;\n  background-color: #CFD8DC;\n}\nnav a.active {\n  color: #039be5;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0NBQXNDO0FBQ3RDO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsY0FBYztBQUNoQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEFwcENvbXBvbmVudCdzIHByaXZhdGUgQ1NTIHN0eWxlcyAqL1xuaDEge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBjb2xvcjogIzk5OTtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cbmgyIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIG1hcmdpbi10b3A6IDA7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxubmF2IGEge1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbm5hdiBhOnZpc2l0ZWQsIGE6bGluayB7XG4gIGNvbG9yOiAjNjA3RDhCO1xufVxubmF2IGE6aG92ZXIge1xuICBjb2xvcjogIzAzOWJlNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NGRDhEQztcbn1cbm5hdiBhLmFjdGl2ZSB7XG4gIGNvbG9yOiAjMDM5YmU1O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Invoice Generator';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _generate_invoice_generate_invoice_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./generate-invoice/generate-invoice.component */ "./src/app/generate-invoice/generate-invoice.component.ts");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm5/ngx-device-detector.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./globals */ "./src/app/globals.ts");
/* harmony import */ var _get_pdf_get_pdf_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./get-pdf/get-pdf.component */ "./src/app/get-pdf/get-pdf.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");

















var AppModule = /** @class */ (function () {
    function AppModule(platformId, appId) {
        this.platformId = platformId;
        this.appId = appId;
        var platform = Object(_angular_common__WEBPACK_IMPORTED_MODULE_7__["isPlatformBrowser"])(platformId) ?
            'in the browser' : 'on the server';
        // console.log(`Running ${platform} with appId=${appId}`);
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"].withServerTransition({ appId: 'tour-of-heroes' }),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                ngx_device_detector__WEBPACK_IMPORTED_MODULE_11__["DeviceDetectorModule"].forRoot(),
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _generate_invoice_generate_invoice_component__WEBPACK_IMPORTED_MODULE_10__["GenerateInvoiceComponent"],
                _get_pdf_get_pdf_component__WEBPACK_IMPORTED_MODULE_14__["GetPdfComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
            ],
            providers: [
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_12__["CookieService"],
                _globals__WEBPACK_IMPORTED_MODULE_13__["Globals"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, String])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/generate-invoice/generate-invoice.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/generate-invoice/generate-invoice.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.only-for-print{\n  display: none;\n}\n\n  @media print{\n\n\n    #customers {\n        font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n        border-collapse: collapse;\n        width: 100%;\n      }\n      \n      #customers td, #customers th {\n        border: 1px solid #ddd;\n        padding: 8px;\n      }\n      \n      #customers tr:nth-child(even){background-color: #f2f2f2;}\n      \n      #customers tr:hover {background-color: #ddd;}\n      \n      #customers th {\n        padding-top: 12px;\n        padding-bottom: 12px;\n        text-align: left;\n        /* background-color: #4CAF50; */\n        color: #060606;\n      }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2VuZXJhdGUtaW52b2ljZS9nZW5lcmF0ZS1pbnZvaWNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsYUFBYTtBQUNmOztFQUVFOzs7SUFHRTtRQUNJLHlEQUF5RDtRQUN6RCx5QkFBeUI7UUFDekIsV0FBVztNQUNiOztNQUVBO1FBQ0Usc0JBQXNCO1FBQ3RCLFlBQVk7TUFDZDs7TUFFQSw4QkFBOEIseUJBQXlCLENBQUM7O01BRXhELHFCQUFxQixzQkFBc0IsQ0FBQzs7TUFFNUM7UUFDRSxpQkFBaUI7UUFDakIsb0JBQW9CO1FBQ3BCLGdCQUFnQjtRQUNoQiwrQkFBK0I7UUFDL0IsY0FBYztNQUNoQjtFQUNKIiwiZmlsZSI6InNyYy9hcHAvZ2VuZXJhdGUtaW52b2ljZS9nZW5lcmF0ZS1pbnZvaWNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5vbmx5LWZvci1wcmludHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuICBAbWVkaWEgcHJpbnR7XG5cblxuICAgICNjdXN0b21lcnMge1xuICAgICAgICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICBcbiAgICAgICNjdXN0b21lcnMgdGQsICNjdXN0b21lcnMgdGgge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICB9XG4gICAgICBcbiAgICAgICNjdXN0b21lcnMgdHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7fVxuICAgICAgXG4gICAgICAjY3VzdG9tZXJzIHRyOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO31cbiAgICAgIFxuICAgICAgI2N1c3RvbWVycyB0aCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMnB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDsgKi9cbiAgICAgICAgY29sb3I6ICMwNjA2MDY7XG4gICAgICB9XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/generate-invoice/generate-invoice.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/generate-invoice/generate-invoice.component.ts ***!
  \****************************************************************/
/*! exports provided: GenerateInvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateInvoiceComponent", function() { return GenerateInvoiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/local-storage.service */ "./src/app/services/local-storage.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var GenerateInvoiceComponent = /** @class */ (function () {
    function GenerateInvoiceComponent(platformId, appId, localStorageService) {
        this.platformId = platformId;
        this.appId = appId;
        this.localStorageService = localStorageService;
        this.currencySelected = 'usd';
        this.discountSelected = 'flat';
        this.shippingSelected = 'on';
        this.taxSelected = 'persantage';
        this.maxId = 1;
        this.isChecked = false;
        this.vatOrTax = 'Tax';
        this.currencys = [
            { name: 'USD', symbol: 'USD' },
            { name: 'PSD', symbol: 'PSD' },
            { name: 'TK', symbol: 'TK' },
            { name: 'EUR', symbol: 'EUR' },
            { name: 'USD', symbol: 'USD' }
        ];
        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();
        var newdate = year + "-" + month + "-" + day;
        this.today = newdate;
    }
    GenerateInvoiceComponent.prototype.ngOnInit = function () {
        this.initPage();
    };
    GenerateInvoiceComponent.prototype.addNewRow = function () {
        if (!this.localStorageService.checkKeyExist('itemsData')) {
            // this.itemsData = {
            //   id:'1',
            //   itemName:'item name/Description',
            //   itexQuantity:'0',
            //   itemRate:'0',
            //   itemVat:'0',
            //   amount:'0'
            // };
            // this.localStorageService.setItem('itemsData', JSON.stringify(this.itemsData));
        }
        else {
            this.itemsData = JSON.parse(this.localStorageService.getItem('itemsData'));
            this.maxId = this.maxId + 1;
            var newItem = {
                id: this.maxId,
                itemName: 'item name/Description',
                itexQuantity: '0',
                itemRate: '0',
                itemVat: '0',
                amount: '0',
                maxId: this.maxId,
            };
            this.itemsData.push(newItem);
            this.localStorageService.setItem('itemsData', JSON.stringify(this.itemsData));
            console.log(this.itemsData);
        }
    };
    GenerateInvoiceComponent.prototype.removeRow = function (id) {
        var data = JSON.parse(this.localStorageService.getItem('itemsData'));
        var newData = [];
        data.forEach(function (value, index) {
            if (value.id === id) {
            }
            else {
                newData.push(value);
            }
        });
        this.itemsData = newData;
        this.localStorageService.setItem('itemsData', JSON.stringify(this.itemsData));
        this.updateTotalAmounts();
    };
    GenerateInvoiceComponent.prototype.deleteLocalData = function () {
        this.localStorageService.removeAll();
        this.initPage();
    };
    GenerateInvoiceComponent.prototype.initPage = function () {
        if (!this.localStorageService.checkKeyExist('fromAddress')) {
            this.fromAddress = {
                name: 'Name',
                company: 'Company',
                address: 'Address',
                city_zip: 'City, State, Zip',
                country: 'Country'
            };
            console.log('nodata');
            this.localStorageService.setItem('fromAddress', JSON.stringify(this.fromAddress));
        }
        else {
            this.fromAddress = JSON.parse(this.localStorageService.getItem('fromAddress'));
        }
        if (!this.localStorageService.checkKeyExist('toAddress')) {
            this.toAddress = {
                name: 'Company',
                address: 'Address',
                city_zip: 'City, State, Zip',
                country: 'Country'
            };
            this.localStorageService.setItem('toAddress', JSON.stringify(this.toAddress));
        }
        else {
            this.toAddress = JSON.parse(this.localStorageService.getItem('toAddress'));
        }
        if (!this.localStorageService.checkKeyExist('invoiceData')) {
            this.invoiceData = {
                invoiceName: 'INV-0001',
                invoiceDate: this.today,
                dueDate: this.today,
            };
            this.localStorageService.setItem('invoiceData', JSON.stringify(this.invoiceData));
        }
        else {
            this.invoiceData = JSON.parse(this.localStorageService.getItem('invoiceData'));
        }
        if (!this.localStorageService.checkKeyExist('itemsData')) {
            this.itemsData = [{
                    id: 1,
                    itemName: 'item name/Description',
                    itexQuantity: '0',
                    itemRate: '0',
                    itemVat: '0',
                    amount: '0',
                    maxId: this.maxId,
                }];
            this.localStorageService.setItem('itemsData', JSON.stringify(this.itemsData));
        }
        else {
            this.itemsData = JSON.parse(this.localStorageService.getItem('itemsData'));
        }
        if (!this.localStorageService.checkKeyExist('totalAmounts')) {
            this.totalAmounts = {
                subTotal: '0.00',
                discount: '0.00',
                shipping: '0.00',
                vat: '0.00',
                total: '0.00',
            };
            this.localStorageService.setItem('totalAmounts', JSON.stringify(this.totalAmounts));
        }
        else {
            this.totalAmounts = JSON.parse(this.localStorageService.getItem('totalAmounts'));
        }
    };
    GenerateInvoiceComponent.prototype.updateFromAddress = function () {
        if (this.localStorageService.checkKeyExist('fromAddress')) {
            this.fromAddress = {
                name: this.fromAddress.name,
                company: this.fromAddress.company,
                address: this.fromAddress.address,
                city_zip: this.fromAddress.city_zip,
                country: this.fromAddress.country,
            };
            this.localStorageService.setItem('fromAddress', JSON.stringify(this.fromAddress));
        }
        else {
            //this.fromAddress = JSON.parse(this.localStorageService.getItem('fromAddress'));
        }
    };
    GenerateInvoiceComponent.prototype.updateToAddress = function () {
        if (this.localStorageService.checkKeyExist('toAddress')) {
            this.toAddress = {
                name: this.toAddress.name,
                address: this.toAddress.address,
                city_zip: this.toAddress.city_zip,
                country: this.toAddress.country,
            };
            this.localStorageService.setItem('toAddress', JSON.stringify(this.toAddress));
        }
        else {
            //this.fromAddress = JSON.parse(this.localStorageService.getItem('fromAddress'));
        }
    };
    GenerateInvoiceComponent.prototype.updateInvoiceData = function () {
        if (this.localStorageService.checkKeyExist('invoiceData')) {
            this.invoiceData = {
                invoiceName: this.invoiceData.invoiceName,
                invoiceDate: this.invoiceData.invoiceDate,
                dueDate: this.invoiceData.dueDate,
            };
            this.localStorageService.setItem('invoiceData', JSON.stringify(this.invoiceData));
        }
        else {
            //this.fromAddress = JSON.parse(this.localStorageService.getItem('fromAddress'));
        }
    };
    GenerateInvoiceComponent.prototype.updateProductData = function () {
        // let data = JSON.parse(this.localStorageService.getItem('itemsData'));
        var newData = [];
        var subTotal = 0;
        this.itemsData.forEach(function (value, index) {
            var amount = value.itexQuantity * value.itemRate;
            value.amount = amount;
            newData.push(value);
            subTotal = subTotal + amount;
        });
        this.itemsData = newData;
        this.localStorageService.setItem('itemsData', JSON.stringify(this.itemsData));
        this.totalAmounts.subTotal = subTotal;
        this.localStorageService.setItem('totalAmounts', JSON.stringify(this.totalAmounts));
        this.updateTotalAmounts();
    };
    GenerateInvoiceComponent.prototype.updateTotalAmounts = function () {
        var _this = this;
        var newData = [];
        var subTotal = 0;
        var totalVat = 0;
        var finalTotal = 0;
        var totalDiscount = 0;
        var totalShipping = 0;
        this.itemsData.forEach(function (value, index) {
            var amount = value.itexQuantity * value.itemRate;
            if (_this.taxSelected != 'off') {
                if (_this.taxSelected == 'vat') {
                    var vat = 0;
                    vat = (amount * _this.totalAmounts.vat) / 100;
                    value.itemVat = vat;
                    totalVat = totalVat + vat;
                }
                else if (_this.taxSelected == 'flat') {
                    value.itemVat = 0.00;
                    totalVat = _this.totalAmounts.vat;
                }
                else if (_this.taxSelected == 'persantage') {
                    value.itemVat = 0.00;
                    var vat = 0;
                    vat = (amount * _this.totalAmounts.vat) / 100;
                    value.itemVat = vat;
                    totalVat = totalVat + vat;
                }
            }
            else {
                value.itemVat = 0;
                totalVat = 0;
                _this.totalAmounts.vat = 0;
            }
            value.amount = amount;
            newData.push(value);
            subTotal = subTotal + amount;
        });
        if (this.discountSelected != 'off') {
            if (this.discountSelected == 'flat') {
                totalDiscount = this.totalAmounts.discount;
            }
            else if (this.discountSelected == 'persantage') {
                totalDiscount = (subTotal * this.totalAmounts.discount) / 100;
            }
        }
        else {
            this.totalAmounts.discount = 0;
            totalDiscount = this.totalAmounts.discount;
        }
        if (this.shippingSelected != 'off') {
            if (this.shippingSelected == 'on') {
                totalShipping = this.totalAmounts.shipping;
            }
        }
        else {
            this.totalAmounts.shipping = 0;
            totalShipping = this.totalAmounts.shipping;
        }
        finalTotal = parseInt(subTotal) + parseInt(totalVat) - parseInt(totalDiscount) + parseInt(totalShipping);
        this.totalAmounts.total = finalTotal;
        this.itemsData = newData;
        this.localStorageService.setItem('itemsData', JSON.stringify(this.itemsData));
        this.totalAmounts.subTotal = subTotal;
        this.localStorageService.setItem('totalAmounts', JSON.stringify(this.totalAmounts));
    };
    GenerateInvoiceComponent.prototype.discountTypeChange = function (value) {
        this.discountSelected = value;
        this.updateTotalAmounts();
    };
    GenerateInvoiceComponent.prototype.shippingTypeChange = function (value) {
        this.shippingSelected = value;
        this.updateTotalAmounts();
    };
    GenerateInvoiceComponent.prototype.taxTypeChange = function (value) {
        if (value == 'vat') {
            this.vatOrTax = 'VAT';
        }
        else if (value == 'tax') {
            this.vatOrTax = 'Tax';
        }
        else if (value == 'off') {
        }
        this.taxSelected = value;
        this.updateTotalAmounts();
    };
    GenerateInvoiceComponent.prototype.currencySelectedTypeChange = function (value) {
        this.currencySelected = value;
    };
    GenerateInvoiceComponent.prototype.createPdf = function () {
        // var pdf = new jsPDF('p', 'pt', 'letter');
        // pdf.canvas.height = 80 * 11;
        // pdf.canvas.width = 80 * 8.5;   
        // let content = `
        // `;
        var content = '';
        ;
        // pdf.fromHTML(content).html(); //Your HTML content goes here
        // pdf.save('test.pdf');
        var printContent = document.getElementById('final-invoice');
        var WinPrint = window.open('', '', 'width=900,height=650');
        WinPrint.document.write(printContent.innerHTML);
        WinPrint.document.close();
        WinPrint.focus();
        WinPrint.print();
        WinPrint.close();
        // var data = document.getElementById('final-invoice');  
        // html2canvas(data).then(canvas => {  
        //   // Few necessary setting options  
        //   var imgWidth = 208;   
        //   var pageHeight = 50000;    
        //   var imgHeight = canvas.height * imgWidth / canvas.width;  
        //   var heightLeft = imgHeight;  
        //   const contentDataURL = canvas.toDataURL('image/png')  
        //   let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF  
        //   var position = 0;  
        //   pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight)  
        //   pdf.save('MYPdf.pdf'); // Generated PDF   
        // }); 
        // var doc = new jsPDF('p','pt', 'a4', true);
        // var header = [1,2,3,4];
        // doc.save('sample-file.pdf');
    };
    GenerateInvoiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-generate-invoice',
            template: __webpack_require__(/*! raw-loader!./generate-invoice.component.html */ "./node_modules/raw-loader/index.js!./src/app/generate-invoice/generate-invoice.component.html"),
            providers: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]],
            styles: [__webpack_require__(/*! ./generate-invoice.component.css */ "./src/app/generate-invoice/generate-invoice.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, String, _services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"]])
    ], GenerateInvoiceComponent);
    return GenerateInvoiceComponent;
}());



/***/ }),

/***/ "./src/app/get-pdf/get-pdf.component.css":
/*!***********************************************!*\
  !*** ./src/app/get-pdf/get-pdf.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n#customers {\n  font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n}\n\n#customers td, #customers th {\n  border: 1px solid #ddd;\n  padding: 8px;\n}\n\n#customers tr:nth-child(even){background-color: #f2f2f2;}\n\n#customers tr:hover {background-color: #ddd;}\n\n#customers th {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  /* background-color: #4CAF50; */\n  color: #060606;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2V0LXBkZi9nZXQtcGRmLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UseURBQXlEO0VBQ3pELHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBLDhCQUE4Qix5QkFBeUIsQ0FBQzs7QUFFeEQscUJBQXFCLHNCQUFzQixDQUFDOztBQUU1QztFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLCtCQUErQjtFQUMvQixjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvZ2V0LXBkZi9nZXQtcGRmLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiNjdXN0b21lcnMge1xuICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNjdXN0b21lcnMgdGQsICNjdXN0b21lcnMgdGgge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbiNjdXN0b21lcnMgdHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7fVxuXG4jY3VzdG9tZXJzIHRyOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO31cblxuI2N1c3RvbWVycyB0aCB7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDsgKi9cbiAgY29sb3I6ICMwNjA2MDY7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/get-pdf/get-pdf.component.ts":
/*!**********************************************!*\
  !*** ./src/app/get-pdf/get-pdf.component.ts ***!
  \**********************************************/
/*! exports provided: GetPdfComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetPdfComponent", function() { return GetPdfComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_2__);



var GetPdfComponent = /** @class */ (function () {
    function GetPdfComponent() {
    }
    GetPdfComponent.prototype.ngOnInit = function () {
    };
    GetPdfComponent.prototype.downloadPdf = function () {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_2__();
        var content = "\n    \n    <div>\n    <h1>INVOICE</h1>\n    </div>\n    \n    ";
        doc.html(content, 10);
        doc.save('test.pdf');
    };
    GetPdfComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-get-pdf',
            template: __webpack_require__(/*! raw-loader!./get-pdf.component.html */ "./node_modules/raw-loader/index.js!./src/app/get-pdf/get-pdf.component.html"),
            styles: [__webpack_require__(/*! ./get-pdf.component.css */ "./src/app/get-pdf/get-pdf.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GetPdfComponent);
    return GetPdfComponent;
}());



/***/ }),

/***/ "./src/app/globals.ts":
/*!****************************!*\
  !*** ./src/app/globals.ts ***!
  \****************************/
/*! exports provided: Globals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Globals = /** @class */ (function () {
    function Globals() {
        this.cookie_prefix = 'invoice_local_';
    }
    Globals = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Globals);
    return Globals;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/services/local-storage.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/local-storage.service.ts ***!
  \***************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-device-detector */ "./node_modules/ngx-device-detector/fesm5/ngx-device-detector.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../globals */ "./src/app/globals.ts");






var LocalStorageService = /** @class */ (function () {
    function LocalStorageService(platformId, appId, deviceService, cookieService, globals) {
        this.platformId = platformId;
        this.appId = appId;
        this.deviceService = deviceService;
        this.cookieService = cookieService;
        this.globals = globals;
        this.prefix = this.globals.cookie_prefix;
    }
    LocalStorageService.prototype.checkKeyExist = function (key) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            key = this.prefix + key;
            if (this.cookieService.check(key)) {
                return true;
            }
            else {
                return false;
            }
        }
    };
    LocalStorageService.prototype.setValue = function (key, value) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            key = this.prefix + key;
            var now = new Date();
            now.setDate(now.getDate() + 15);
            this.cookieService.set(key, value, now, '/');
            return true;
        }
    };
    LocalStorageService.prototype.setItem = function (key, value) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            key = this.prefix + key;
            var now = new Date();
            now.setDate(now.getDate() + 15);
            this.cookieService.set(key, value, now, '/');
            return true;
        }
    };
    LocalStorageService.prototype.getItem = function (key) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            key = this.prefix + key;
            return this.cookieService.get(key);
        }
    };
    LocalStorageService.prototype.removeItem = function (key) {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            key = this.prefix + key;
            this.cookieService.delete(key, '/');
            return true;
        }
    };
    LocalStorageService.prototype.removeAll = function () {
        var _this = this;
        var uuid = this.cookieService.get(this.prefix + 'uuid');
        var cookie_policy = this.cookieService.get(this.prefix + 'cookie_policy');
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            var cookies = this.cookieService.getAll();
            if (cookies) {
                Object.keys(cookies).forEach(function (index) {
                    if (index.startsWith(_this.prefix)) {
                        _this.cookieService.delete(index, '/');
                    }
                });
            }
            var now = new Date();
            now.setDate(now.getDate() + 15);
            this.cookieService.set(this.prefix + 'uuid', uuid, now, '/');
            this.cookieService.set(this.prefix + 'cookie_policy', cookie_policy, now, '/');
            return true;
        }
    };
    LocalStorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["APP_ID"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, String, ngx_device_detector__WEBPACK_IMPORTED_MODULE_3__["DeviceDetectorService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"],
            _globals__WEBPACK_IMPORTED_MODULE_5__["Globals"]])
    ], LocalStorageService);
    return LocalStorageService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: true
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/mjnayem/Documents/INVOICE_v2/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map