<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{asset('css/style.css?v=1.6')}}">
    <script src="https://kit.fontawesome.com/8d4425b4c8.js" crossorigin="anonymous"></script>
    <title>Inicio de sesion</title>
</head>
<body>
    <div class="container-main">
        <header>
            <nav class="navbar">
                <li class="list-item">
                    <h1> <i class="fas fa-birthday-cake home"></i></h1>
                </li>
            </nav>
        </header>
        <h2 class="title-section">Iniciar sesión</h2>
        <form action="#" class="form form-login">
            <div class="form-group">
                <label for="email"><i class="fas fa-at"></i>Email</label>
                <input type="email" name="email" id="email" class="form-control" placeholder="alguien@example.com">
            </div>
            <div class="form-group">
                <label for="password"><i class="fas fa-key"></i>Contraseña</label>
                <input type="password" name="password" id="password" class="form-control">
            </div>
            <div class="container-btn">
                <button type="submit" class="btn btn-primary" id="btn_submit">Ingresar<i class="fas fa-arrow-circle-right"></i></button>
            </div>
            <div class="form-group">
                <small>¿Aún no tienes una cuenta? <a href="#" class="account">Regístrate aquí</a></small>
            </div>
        </form>
    </div>

    <!-- <div class="container mt-5">
        <div class="row justify-content-center mb-3">
            <div class="col-3 align-items-center">
                <img src="{{asset('images/logoReposteria.png')}}" alt="logoReposteria" class="img-thumbnail">
            </div>
        </div>
        <form action="">
            <div class="row form-group justify-content-center mb-3">
                <div class="col-sm-1 col-lg-2 align-items-center">
                    <label for="" class="form-label">Email</label>
                </div>
                <div class="col-sm-1 col-lg-3 align-items-center">
                    <input type="email" name="name" id="email" class="form-control" placeholder="alguien@example.com">
                </div>
            </div>
            <div class="row form-group justify-content-center mb-3">
                <div class="col-sm-1 col-lg-2 align-items-center">
                    <label for="" class="form-label">Password</label>
                </div>
                <div class="col-sm-1 col-lg-3 align-items-center">
                    <input type="password" name="" id="password" class="form-control">
                </div>
            </div>
            <div class="row form-group justify-content-center mb-3">
                <div class="col-sm-1 col-lg-1">
                    <button type="submit" class="btn btn-primary">Entrar</button>
                </div>
            </div>
        </form>
        <div class="row justify-content-center mb-3 w-auto">
            <div class="col-sm-1 col-lg-1">
                <a href="">Ir a inicio</a>
            </div>
        </div>
    </div>

    <div class="container-fluid fixed-bottom" style="background-color: #F5B7B1; height:150px">
        <div class="container">
            <div class="row justify-content-around">
                <div class="col-sm-1 col-lg-4">
                    <a href="http://facebook.com" target="_blank">Sweet World Page</a>
                </div>
                <div class="col-sm-1 col-lg-4">
                    <a href="http://twitter.com" target="_blank">@sweet_world</a>
                </div>
                <div class="col-sm-1 col-lg-4">
                    <a href="https://www.instagram.com/sweet_world_parra/?hl=es" target="_blank">@sweet_world_parra</a>
                </div>
            </div>
        </div>
    </div> -->


    <script src="{{asset('js/app.js')}}"></script>
</body>
</html>
