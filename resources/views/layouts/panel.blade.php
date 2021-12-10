<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://kit.fontawesome.com/8d4425b4c8.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="{{ asset('css/style.css?v=1.15') }}">
    <title>@yield('title')</title>
</head>
<body>
    <header class="panel">
        <nav class="navbar">
            <ul class="container-panel">
                <li class="list-item menu">
                    <h1><i class="fas fa-birthday-cake home"></i></h1>
                    <div class="menu-responsive" id="menu_responsive">
                        <h2 id="menu" class="open"><i class="fas fa-bars"></i></h2>
                        <h2 id="close" class="close"><i class="fas fa-times"></i></h2>
                    </div>
                </li>
                <ul class="navbar-options" id="navbar_options">
<<<<<<< HEAD
                    <li class="list-item"><a href="#" id="buttonRecipe" class="navbar-link"><i class="fas fa-clipboard-list option-icon"></i>Receta</a></li>
                    <li class="list-item"><a href="#" id="buttonIngredient" class="navbar-link"><i class="fas fa-balance-scale-right option-icon"></i>Ingrediente</a></li>
                    <li class="list-item"><a href="#" id="buttonCost" class="navbar-link"><i class="fas fa-hand-holding-usd option-icon"></i>Cotización</a></li>
=======
                    <li class="list-item"><a href="#" class="navbar-link" id="buttonRecipe"><i class="fas fa-clipboard-list option-icon"></i>Receta</a></li>
                    <li class="list-item"><a href="#" class="navbar-link" id="buttonIngredient"><i class="fas fa-balance-scale-right option-icon"></i>Ingrediente</a></li>
                    <li class="list-item"><a href="#" class="navbar-link" id="buttonIngredient"><i class="fas fa-hand-holding-usd option-icon"></i>Cotización</a></li>
>>>>>>> main
                </ul>
                <div class="user-container"><i class="fas fa-user-circle icon"></i><span>David Tlahuapa Coraza</span></div>
            </ul>
        </nav>
    </header>
    <!-- <div class="container-cards" id="ingrediente-${numIngrediente}">
            <div class="card">
                <h3 class="card-title">Nombre Ingrediente</h3>
                <h4 class="card-text">Cantidad 1kg</h4>
                <h4 class="card-text">Costo $150</h4>
                <h4 class="card-text">Cantidad a usar:</h4>
                <input type="number" step="any" name="" id="" placeholder="0.0 gr." class="form-control-secondary">
                <h3 class="card-text">Total: $75.00</h3>
            </div>
        </div> -->
    @yield('content')
    <script src="{{ asset('js/menu-responsive.js?v=1.1')}}"></script>
    <script src="{{ asset('js/funcionalidad.js?v=1.1')}}"></script>
</body>
</html>
