/*
*	选中输入框,提示文字变淡,输入内容时提示消失
*/
KISSY.use('dom, event', function(S, D, E) {
  /**
  * [Labfocus description]
  * @param {string} id  [input id]
  * @param {string} lab [label id]
  * @param {string} gray [forcus class]
  */

  function Labfocus(id, lab, gray) {
    E.detach(id);
    E.on(id, 'focus blur', function(ev) {
      if (ev.type === 'focus') {
        D.addClass(lab, gray);
        E.on(id, 'valuechange', function() {
          if (D.val(id).length > 0) {
            D.hide(lab);
          } else {
            D.show(lab);
          }
        })
      }
      if (ev.type === 'blur') {
        if (D.val(id).length === 0) {
          D.removeClass(lab, gray);
        }
      }
    })
  }
  new Labfocus('#J_test', '#J_test_lab', 'on');
});