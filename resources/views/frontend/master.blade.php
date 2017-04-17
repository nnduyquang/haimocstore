<!DOCTYPE Html>
<Html lang="en-US" class="lang-en_US" xmlns="http://www.w3.org/1999/html" xmlns="http://www.w3.org/1999/html">
<meta http-equiv="content-type" content="text/Html;charset=UTF-8"/><!-- /Added by HTTrack -->
<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#">
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title>Hải Mộc Store</title>
    <meta name="keywords" content="">
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width">
    {{ Html::style('css/app.common.css') }}
    {{ Html::style('css/app.css') }}
    {{ Html::style('css/frontend.css') }}
    @yield('styles')
</head>
<body>
<div class="col-md-12">
    <div class="row">
        @include('frontend.common.menu')
    </div>
</div>
<div class="col-md-12">
    <div class="row">
        @yield('container')
    </div>
</div>

<div class="col-md-12">
    <div class="row">
        @include('frontend.common.footer')
    </div>
</div>

{{ Html::script('js/core.common.js') }}
{{ Html::script('js/core.js') }}
{{ Html::script('js/frontend.js') }}
</body>

</Html>