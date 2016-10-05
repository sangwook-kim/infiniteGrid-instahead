# infiniteGrid-instahead
egjs 의 Infinite Grid 를 확장하여 인스타그램 스타일로 스크롤에 따라 헤더가 갱신되는 모듈


## usage
``` javascript
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
```
위와 같이 초기 생성시에 headHolder 에 헤더가 상단에 고정된 엘리먼트를 옵션으로 전달. 또한 마크업 구조에 `<header class="real_header">`,  `<header class="fake_header">` 가 추가되어야 한다.

##  demo
open `instahead-demo.html`
