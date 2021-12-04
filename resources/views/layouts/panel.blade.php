<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://kit.fontawesome.com/8d4425b4c8.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="{{ asset('css/style.css?v=1.10') }}">
    <title>@yield('title')</title>
</head>
<body>
    <header class="panel">
        <nav class="navbar">
            <ul class="container-panel">
                <li class="list-item menu">
                    <h1><i class="fas fa-birthday-cake home"></i></h1>
                    <h2 class="menu-responsive"><i class="fas fa-bars"></i></h2>
                </li>
                <ul class="navbar-options">
                    <li class="list-item"><a href="#" class="navbar-link"><i class="fas fa-clipboard-list option-icon"></i>Receta</a></li>
                    <li class="list-item"><a href="#" class="navbar-link"><i class="fas fa-balance-scale-right option-icon"></i>Ingrediente</a></li>
                    <li class="list-item"><a href="#" class="navbar-link"><i class="fas fa-hand-holding-usd option-icon"></i>Cotización</a></li>
                </ul>
                <div class="user-container"><i class="fas fa-user-circle icon"></i><span>David Tlahuapa Coraza</span></div>
            </ul>
        </nav>
    </header>

    <!-- <header>
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
    </header> -->
    @yield('content')

    <!---->
    <script src="{{ asset('js/app.js') }}"></script>
    <script src="{{ asset('js/funcionalidad.js?v=1.0')}}"></script>
</body>
</html>
