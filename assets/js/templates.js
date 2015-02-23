this["HBS"] = this["HBS"] || {};
this["HBS"]["templates"] = this["HBS"]["templates"] || {};

this["HBS"]["templates"]["bottomPanel"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div>\n  <ul>\n    <li>\n      <a id=\"buttonMap\" href=\"#\">Map</a>\n    </li>\n    <li>\n      <a id=\"buttonTownships\" href=\"#\">Townships</a>\n    </li>\n    <li>\n      <a id=\"buttonFavorites\" href=\"#\">My Favorites</a>\n    </li>\n  </ul>\n</div>";
  },"useData":true});

this["HBS"]["templates"]["infoWindow"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "  <img class=\"boutique_logo\" src=\""
    + escapeExpression(((helper = (helper = helpers.boutique_logo || (depth0 != null ? depth0.boutique_logo : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"boutique_logo","hash":{},"data":data}) : helper)))
    + "\" /><br/>\n";
},"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "  &bull; <a class=\"ext_link\" href=\"http://maps.google.com/maps?daddr="
    + escapeExpression(((helper = (helper = helpers.boutique_address || (depth0 != null ? depth0.boutique_address : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"boutique_address","hash":{},"data":data}) : helper)))
    + "\">\n    Get Directions\n  </a>\n  <br/>\n";
},"5":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.boutique_url : depth0), {"name":"if","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.boutique_url : depth0), {"name":"if","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"6":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "    &bull; <a class=\"ext_link\" href=\""
    + escapeExpression(((helper = (helper = helpers.boutique_video || (depth0 != null ? depth0.boutique_video : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"boutique_video","hash":{},"data":data}) : helper)))
    + "\">Watch our video</a>\n    <br/>\n";
},"8":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "    &bull; <a class=\"ext_link\" href=\""
    + escapeExpression(((helper = (helper = helpers.boutique_url || (depth0 != null ? depth0.boutique_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"boutique_url","hash":{},"data":data}) : helper)))
    + "\">Visit our website</a>\n    <br/>\n    <br/>\n";
},"10":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "  <strong>P:</strong> <a class=\"ext_link\" href=\"tel:"
    + escapeExpression(((helper = (helper = helpers.boutique_phone || (depth0 != null ? depth0.boutique_phone : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"boutique_phone","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.boutique_phone || (depth0 != null ? depth0.boutique_phone : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"boutique_phone","hash":{},"data":data}) : helper)))
    + "</a><br/>\n";
},"12":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "  <strong>E:</strong> <a class=\"ext_link\" href=\"mailto:"
    + escapeExpression(((helper = (helper = helpers.boutique_email || (depth0 != null ? depth0.boutique_email : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"boutique_email","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.boutique_email || (depth0 != null ? depth0.boutique_email : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"boutique_email","hash":{},"data":data}) : helper)))
    + "</a>\n  <br/>\n";
},"14":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<strong>Hours:</strong><br/>\n  "
    + escapeExpression(((helper = (helper = helpers.boutique_hours || (depth0 != null ? depth0.boutique_hours : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"boutique_hours","hash":{},"data":data}) : helper)))
    + "\n  <br/><br/>\n";
},"16":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "  <strong>Owners:</strong>\n  <br/>\n  "
    + escapeExpression(((helper = (helper = helpers.boutique_owners || (depth0 != null ? depth0.boutique_owners : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"boutique_owners","hash":{},"data":data}) : helper)))
    + "\n  <br/><br/>\n";
},"18":function(depth0,helpers,partials,data) {
  var stack1, buffer = "  <strong>Boutique Type:</strong>\n  <br/>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.boutique_type : depth0), {"name":"each","hash":{},"fn":this.program(19, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  <br/><br/>\n";
},"19":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "    <li class=\"type_item\">"
    + escapeExpression(lambda((depth0 != null ? depth0.name : depth0), depth0))
    + "</li>\n";
},"21":function(depth0,helpers,partials,data) {
  var stack1, buffer = "  <strong>Social Media:</strong><br/>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.boutique_facebook : depth0), {"name":"if","hash":{},"fn":this.program(22, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.boutique_twitter : depth0), {"name":"if","hash":{},"fn":this.program(24, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.boutique_pinterest : depth0), {"name":"if","hash":{},"fn":this.program(26, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.boutique_instagram : depth0), {"name":"if","hash":{},"fn":this.program(28, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"22":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "    <a class=\"ext_link\" href=\""
    + escapeExpression(((helper = (helper = helpers.boutique_facebook || (depth0 != null ? depth0.boutique_facebook : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"boutique_facebook","hash":{},"data":data}) : helper)))
    + "\"><img class=\"social_icon\" src=\"assets/images/icon_social_facebook.png\"/></a>\n";
},"24":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "    <a class=\"ext_link\" href=\""
    + escapeExpression(((helper = (helper = helpers.boutique_twitter || (depth0 != null ? depth0.boutique_twitter : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"boutique_twitter","hash":{},"data":data}) : helper)))
    + "\"><img class=\"social_icon\" src=\"assets/images/icon_social_twitter.png\"/></a>\n";
},"26":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "    <a class=\"ext_link\" href=\""
    + escapeExpression(((helper = (helper = helpers.boutique_pinterest || (depth0 != null ? depth0.boutique_pinterest : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"boutique_pinterest","hash":{},"data":data}) : helper)))
    + "\"><img class=\"social_icon\" src=\"assets/images/icon_social_pinterest.png\"/></a>\n";
},"28":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "    <a class=\"ext_link\" href=\""
    + escapeExpression(((helper = (helper = helpers.boutique_instagram || (depth0 != null ? depth0.boutique_instagram : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"boutique_instagram","hash":{},"data":data}) : helper)))
    + "\"><img class=\"social_icon\" src=\"assets/images/icon_social_instagram.png\"/></a>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"infoWindow\">\n<h1>"
    + escapeExpression(((helper = (helper = helpers.boutique_name || (depth0 != null ? depth0.boutique_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"boutique_name","hash":{},"data":data}) : helper)))
    + "</h1>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.boutique_paid_status : depth0), {"name":"if","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n\n<a class=\"ext_link\" href=\"http://maps.google.com/maps?daddr="
    + escapeExpression(((helper = (helper = helpers.boutique_address || (depth0 != null ? depth0.boutique_address : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"boutique_address","hash":{},"data":data}) : helper)))
    + "\">\n  "
    + escapeExpression(((helper = (helper = helpers.boutique_address || (depth0 != null ? depth0.boutique_address : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"boutique_address","hash":{},"data":data}) : helper)))
    + "\n</a>\n<br/>\n<br/>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.boutique_url : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.boutique_paid_status : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.boutique_phone : depth0), {"name":"if","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.boutique_email : depth0), {"name":"if","hash":{},"fn":this.program(12, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "<br/>\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.boutique_hours : depth0), {"name":"if","hash":{},"fn":this.program(14, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.boutique_owners : depth0), {"name":"if","hash":{},"fn":this.program(16, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.boutique_type : depth0), {"name":"if","hash":{},"fn":this.program(18, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.boutique_paid_status : depth0), {"name":"if","hash":{},"fn":this.program(21, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n<br/><br/>\n&bull; <a data-hash=\""
    + escapeExpression(((helper = (helper = helpers.hashBoutique || (depth0 != null ? depth0.hashBoutique : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"hashBoutique","hash":{},"data":data}) : helper)))
    + "\" class=\"buttonAddFavorite\" href=\"#\">Add to my favorites</a>\n\n\n</div>";
},"useData":true});

this["HBS"]["templates"]["mbFavorites"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing;
  return "      <li>\n        <img data-hash=\""
    + escapeExpression(lambda((depth0 != null ? depth0.hashBoutique : depth0), depth0))
    + "\"class=\"buttonDeleteFav\" src=\"assets/images/icon_delete.png\"/>\n        <a data-hash=\""
    + escapeExpression(lambda((depth0 != null ? depth0.hashBoutique : depth0), depth0))
    + "\" class=\"buttonBoutique\" href=\"#\">\n          "
    + escapeExpression(((helper = (helper = helpers.boutique_name || (depth0 != null ? depth0.boutique_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"boutique_name","hash":{},"data":data}) : helper)))
    + "\n        </a>\n      </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"townshipContainer\">\n  <h1 class=\"townshipSearchTitle\">\n    My Favorites\n  </h1>\n  <hr/>\n  <ul id=\"favoritesList\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.data : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  </ul>\n\n</div>\n";
},"useData":true});

this["HBS"]["templates"]["mbTownships"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "          <option value=\""
    + escapeExpression(lambda(depth0, depth0))
    + "\">"
    + escapeExpression(lambda(depth0, depth0))
    + "</option>\n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "    <hr/>\n    <ul class=\"townshipTile\">\n      <a href=\"#\" class=\"buttonTownship\" data-township=\""
    + escapeExpression(lambda((data && data.key), depth0))
    + "\">\n        "
    + escapeExpression(lambda((data && data.key), depth0))
    + "\n      </a>\n\n";
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </ul>\n";
},"4":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression, buffer = "      <li>\n          <a data-hash=\""
    + escapeExpression(lambda((depth0 != null ? depth0.hashBoutique : depth0), depth0))
    + "\" class=\"buttonBoutique\" href=\"#\">\n             "
    + escapeExpression(lambda((depth0 != null ? depth0.boutique_name : depth0), depth0))
    + "\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.distance : depth0), {"name":"if","hash":{},"fn":this.program(5, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "          </a>\n      </li>\n";
},"5":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "              (~"
    + escapeExpression(lambda((depth0 != null ? depth0.distance : depth0), depth0))
    + "mi)\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"townshipContainer\">\n  <h1 class=\"townshipSearchTitle\">\n    Refine your search\n  </h1>\n  <ul class=\"townshipTile\">\n    <li class=\"searchLinks\">\n      <a id=\"buttonShowAll\" href=\"http://google.com\">\n        Show all Boutiques\n      </a>\n    </li>\n    <li class=\"searchLinks\">\n      <a id=\"buttonShowRadius\" href=\"#\">\n        Show within 10 miles\n      </a>\n    </li>\n    <li class=\"searchLinks\">\n      Show by Boutique Type:<br/>\n      <select id=\"searchSelect\">\n        <option value=\"\">Show by boutique type</option>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.boutiqueTypes : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "      </select>\n    </li>\n  </ul>\n  <div>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.data : depth0), {"name":"each","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  </div>\n</div>";
},"useData":true});