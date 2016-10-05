var template = Handlebars.compile($("#items-template").html());
var users = [
    {id: 'othellonine', profile: '1.jpg'},
    {id: 'gyejeolnet', profile: '2.jpg'},
    {id: 'strongisthenewskinny94', profile: '3.jpg'},
    {id: 'garethpon', profile: '4.jpg'},
    {id: 'lavicvic', profile: '5.jpg'},
    {id: 'jjiiwwon', profile: '6.jpg'},
    {id: 'dguttenfelder', profile: '7.jpg'},
    {id: 'pechanga', profile: '8.jpg'},
    {id: 'samhorine', profile: '9.jpg'},
    {id: 'inezvinoodh', profile: '10.jpg'},
    {id: 'iinstagramme', profile: '11.jpg'}
];
var data = {
    getItems: function(groupNo) {
                  groupNo *= 30;
                  var items = [];
                  for(var i=0; i<30; i++) {
                      items.push(groupNo + i);
                  }
                  items = $.map(items, function(v) {
                      return {
                        offset: v,
                        imgSrc: "http://naver.github.io/egjs-experiment/infiniteGridService/demo/img/" + ( ( (v + 1) % 60) + 1 ) + ".jpg",
                        href: "http://naver.com/",
                        desc: "Cras justo odio...",
                        user: users[v % users.length]
                      };
                  });
                  return {items: items};
              }
};

$(document).ready(function() {
    var $grid = $("#grid");
    var ig = new eg.InfiniteGridInstaHead("#grid", {
        count : 60,
        defaultGroupKey : 1,
        headHolder : $('#instahead')
    }).on({
        "append" : function(e) {
            var gk = this.getGroupKeys();
            var lastGk = gk[gk.length-1];
            lastGk++;
            ig.append(template(data.getItems(lastGk)), lastGk);
        },
        "prepend" : function(e) {
            var firstGk = this.getGroupKeys()[0];
            firstGk--;
            if(firstGk >= 0) {
                ig.prepend(template(data.getItems(firstGk)), firstGk);
            }
        },
        "layoutComplete" : function(e) {
            $grid.css("visibility", "visible");
        }
    });
    ig.append(template(data.getItems(0)), 0);
});
