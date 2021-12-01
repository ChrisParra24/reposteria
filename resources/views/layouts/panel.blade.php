<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{ asset('css/app.css') }}">
    <title>@yield('title')</title>
</head>
<body>

    <!--header-->
    <header>
        <div class="container-fluid" style="background-color: #F5B7B1">
            <div class="container pt-3">
                <div class="row justify-content-around align-items-center">
                    <div class="col-3">
                        <img src="{{asset('images/logoReposteria.png')}}" alt="logoReposteria" class="img-thumbnail" height="100" width="100">
                    </div>
                    <div class="col-3">
                        <button type="button" class="btn btn-secondary btn-lg" id="buttonRecipe">Receta</button>
                    </div>
                    <div class="col-3">
                        <button type="button" class="btn btn-secondary btn-lg" id="buttonIngredient">Ingrediente</button>
                    </div>
                    <div class="col-3">
                        <button type="button" class="btn btn-secondary btn-lg" id="buttonCost">Cotizacion</button>
                    </div>
                </div>
            </div>
        </div>
    </header>

    @yield('content')

    <!---->
    <script src="{{ asset('js/app.js') }}"></script>
    <script src="{{ asset('js/funcionalidad.js?v=1.0')}}"></script>
</body>
</html>
