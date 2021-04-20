var copyColorBtn = document.querySelector('.js-copybtn');
copyColorBtn.addEventListener('click', function(event) {
    // .js-copytextのテキストを選択
    var copyText = document.querySelector('.js-copytext');
    var range = document.createRange();
    range.selectNode(copyText);
    window.getSelection().addRange(range);
    try {
        // テキストを選択したらクリップボードにコピーする
        var successful = document.execCommand('copy');
        var msg = successful ? 'successful' : 'unsuccessful';
        console.log('Copy command was ' + msg);
        alert('コピーしました');
    } catch(err) {
        console.log('Oops, unable to copy');
    }
    // 選択状態を解除する
    window.getSelection().removeAllRanges();
});
