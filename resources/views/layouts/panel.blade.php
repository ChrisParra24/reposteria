<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="https://kit.fontawesome.com/8d4425b4c8.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="{{ asset('css/style.css?v=1.43') }}">
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
                    <li class="list-item"><a href="#" class="navbar-link" id="buttonRecipe"><i class="fas fa-clipboard-list option-icon"></i>Receta</a></li>
                    <li class="list-item"><a href="#" class="navbar-link" id="buttonIngredient"><i class="fas fa-balance-scale-right option-icon"></i>Ingrediente</a></li>
                    <li class="list-item"><a href="#" class="navbar-link" id="buttonIngredient"><i class="fas fa-hand-holding-usd option-icon"></i>Cotización</a></li>
                </ul>
                @auth
                    <div class="user-container" id="user_info">
                        <figure class="figure-user">
                            <img src="{{auth()->user()->image()}}" alt="image profile">
                        </figure>
                        <span>{{auth()->user()->username()}}</span>
                    </div>
                    <ul class="user-options hidden" id="user_options">
                        <li class="list-item">
                            <form action="{{route('logout')}}" method="POST">
                                @csrf
                                <a href="#" 
                                    class="navbar-link user-option" 
                                    onclick="this.closest('form').submit()"
                                >
                                    <i class="fas fa-sign-out-alt"></i>Salir
                                </a>
                            </form> 
                        </li>
                        <li class="list-item"><a href="#" class="navbar-link user-option" id="logout"><i class="fas fa-chevron-circle-up close-options" id="close_options"></i></a></li>
                    </ul>
                @else
                    <div class="user-container" id="user_info"><i class="fas fa-user-circle icon"></i><span>Invitado</span></div>
                @endauth
            </ul>
        </nav>
    </header>
    @yield('content')
    <script src="{{ asset('js/menu-responsive.js?v=1.6')}}"></script>
    <script src="{{ asset('js/funcionalidad.js?v=1.1')}}"></script>
</body>
</html>
