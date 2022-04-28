import "./component/index.scss";

let html = `
    <div class="app">
    <a href="#">sdfsdf</a>
        <h1>Example of ungic-theme module</h1>
        <div class="buttons">
            <button class="btn">Gray</button>
            <button class="btn btn-primary">Primary</button>
            <button class="btn btn-secondary">Secondary</button>
            <button class="btn btn-extra">Extra</button>
            <button class="btn btn-success">Success</button>
            <button class="btn btn-danger">Danger</button>
            <button class="btn btn-warning">Warning</button>
            <button class="btn btn-info">Info</button>
            <button class="btn btn-system">System</button>
        </div>
        <hr>
        <h2>Example of colors</h2>
        <div class="colors">
            <div class="color-box primary">
                <span class="color-name">Primary</span>
                <span class="color-example"></span>
            </div>
            <div class="color-box secondary">
                <span class="color-name">secondary</span>
                <span class="color-example"></span>
            </div>
            <div class="color-box extra">
                <span class="color-name">extra</span>
                <span class="color-example"></span>
            </div>
            <div class="color-box success">
                <span class="color-name">success</span>
                <span class="color-example"></span>
            </div>
            <div class="color-box danger">
                <span class="color-name">danger</span>
                <span class="color-example"></span>
            </div>
            <div class="color-box warning">
                <span class="color-name">warning</span>
                <span class="color-example"></span>
            </div>
            <div class="color-box info">
                <span class="color-name">info</span>
                <span class="color-example"></span>
            </div>
            <div class="color-box system">
                <span class="color-name">system</span>
                <span class="color-example"></span>
            </div>
        </div>
        <h2>An example of main colors</h2>
        <div>
            <div class="color-tint bgc">
                color(background-color)
            </div>
            <div class="color-tint text-color">
                color(text-color)
            </div>
            <div class="color-tint gray">
                color(gray)
            </div>
        </div>
        <h2>An example of a color tint</h2>
        <div class="colors-line">
            <div class="color-tint l0">
                primary()
            </div>
            <div class="color-tint l1">
                primary(.1)
            </div>
            <div class="color-tint l2">
                primary(.2)
            </div>
            <div class="color-tint l3">
                primary(.3)
            </div>
            <div class="color-tint l4">
                primary(.4)
            </div>
            <div class="color-tint l6">
                primary(.6)
            </div>
            <div class="color-tint l7">
                primary(.7)
            </div>
            <div class="color-tint l8">
                primary(.8)
            </div>
            <div class="color-tint l9">
                primary(.9)
            </div>
            <div class="color-tint l10">
                primary(1)
            </div>            
        </div>
        <div class="colors-line">
            <div class="color-tint l-1">
                primary()
            </div>
            <div class="color-tint l-1">
                primary(-.1)
            </div>
            <div class="color-tint l-2">
                primary(-.2)
            </div>
            <div class="color-tint l-3">
                primary(-.3)
            </div>
            <div class="color-tint l-4">
                primary(-.4)
            </div>
            <div class="color-tint l-6">
                primary(-.6)
            </div>
            <div class="color-tint l-7">
                primary(-.7)
            </div>
            <div class="color-tint l-8">
                primary(-.8)
            </div>
            <div class="color-tint l-9">
                primary(-.9)
            </div>
            <div class="color-tint l-10">
                primary(-1)
            </div>            
        </div>
        <div class="colors-line">
            <div class="color-tint la1">
                secondary(.1)
            </div>
            <div class="color-tint la2">
                secondary(.15)
            </div>
            <div class="color-tint la3">
                secondary(.2)
            </div>
            <div class="color-tint la4">
                secondary(.25)
            </div>
            <div class="color-tint la5">
                secondary(.3)
            </div>
            <div class="color-tint la6">
                secondary(.35)
            </div>
            <div class="color-tint la7">
                secondary(.4)
            </div>
            <div class="color-tint la8">
                secondary(.45)
            </div>
            <div class="color-tint la9">
                secondary(.5)
            </div>
            <div class="color-tint la10">
                secondary(.55)
            </div>            
        </div>
        <div class="colors-line">
            <div class="color-tint s0">
                danger()
            </div>
            <div class="color-tint s1">
                danger(.1)
            </div>
            <div class="color-tint s2">
                danger(.2)
            </div>
            <div class="color-tint s3">
                danger(.3)
            </div>
            <div class="color-tint s4">
                danger(.4)
            </div>
            <div class="color-tint s6">
                danger(.6)
            </div>
            <div class="color-tint s7">
                danger(.7)
            </div>
            <div class="color-tint s8">
                danger(.8)
            </div>
            <div class="color-tint s9">
                danger(.9)
            </div>
            <div class="color-tint s10">
                danger(1)
            </div>            
        </div>
        <div class="colors-line">
            <div class="color-tint s-1">
                danger()
            </div>
            <div class="color-tint s-1">
                danger(-.1)
            </div>
            <div class="color-tint s-2">
                danger(-.2)
            </div>
            <div class="color-tint s-3">
                danger(-.3)
            </div>
            <div class="color-tint s-4">
                danger(-.4)
            </div>
            <div class="color-tint s-6">
                danger(-.6)
            </div>
            <div class="color-tint s-7">
                danger(-.7)
            </div>
            <div class="color-tint s-8">
                danger(-.8)
            </div>
            <div class="color-tint s-9">
                danger(-.9)
            </div>
            <div class="color-tint s-10">
                danger(-1)
            </div>            
        </div>
        <h2>An example of a gray scale colors</h2>
        <div class="colors-line">
            <div class="color-tint g1">
                gray(.1)
            </div>
            <div class="color-tint g2">
                gray(.2)
            </div>
            <div class="color-tint g3">
                gray(.3)
            </div>
            <div class="color-tint g4">
                gray(.4)
            </div>
            <div class="color-tint g6">
                gray(.6)
            </div>
            <div class="color-tint g7">
                gray(.7)
            </div>
            <div class="color-tint g8">
                gray(.8)
            </div>
            <div class="color-tint g9">
                gray(.9)
            </div>
            <div class="color-tint g10">
                gray(1)
            </div>            
        </div>
        <div class="colors-line">
            <div class="color-tint g-1">
                gray(-.1)
            </div>
            <div class="color-tint g-2">
                gray(-.2)
            </div>
            <div class="color-tint g-3">
                gray(-.3)
            </div>
            <div class="color-tint g-4">
                gray(-.4)
            </div>
            <div class="color-tint g-6">
                gray(-.6)
            </div>
            <div class="color-tint g-7">
                gray(-.7)
            </div>
            <div class="color-tint g-8">
                gray(-.8)
            </div>
            <div class="color-tint g-9">
                gray(-.9)
            </div>
            <div class="color-tint g-10">
                gray(-1)
            </div>            
        </div>
    </div>
`

document.getElementById('root').innerHTML = html;