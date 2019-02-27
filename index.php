<?php ini_set('display_errors','1'); ?>
<!DOCTYPE html>
<html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="css/style.css">
    <script src="script.js"></script>
    </head>
    <body id="page_home">
<div class="wrapper">
    <header>
    <div class="branding"> <!--<img src="./images/logo.png" alt="Logo">-->
      <p><br>
        </p>
    </div>
    <div class="description">
      <h1>ClothingStore  </h1>
      <p></p>
    </div>
    <nav>
      <ol>
        <li><a href="../index.php">HOME</a></li>
        <li><a href="../clothes.php">CLOTHES</a></li>
        <li><a href="../schedule/index.php">SHOOES</a></li>
        <li><a href="../#.php">ACCESSORIES</a></li>
        <li><a href="index.php">REGISTER</a></li>
      </ol>
    </nav>
  </header>
  <div id="rotator"><img src="images/#.jpg" width="1000" height="320" alt="#"></div>
  <!-- Rotator -->
  <section id="main">
    <article id="aboutheevent">
      <h2>About the ClothingStore</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, voluptatum quibusdam? Aperiam minima aut libero perferendis quo, est, eius saepe earum, iste dolor a nisi reprehenderit incidunt veniam fugit quisquam.</p>
    </article>
    <!-- About the event -->
    
    <article id="featuredartists">
      <h2>Featured Products</h2>
      <p>bla bla</p>
      <div class="artistgroup clearfix">
        <ul class="clearfix">
          <li><img src="#" alt="#"></li>
          <li><img src="#" alt="#"></li>
          <li><img src="#" alt="#"></li>
          <li><img src="#" alt="#"></li>
          <li><img src="#" alt="#"></li>
          <li><img src="#" alt="#"></li>
          <li><img src="#" alt="#"></li>
          <li><img src="#" alt="#"></li>
          <li><img src="#" alt="#"></li>
          
        </ul>
        <p class="clearfix"><a class="link" href="clothes.php">bla bla</a></p>
      </div>
    </article>
    <!-- Featured Artists -->
    <article id="thevenue">
      <h2>Tbla bla</h2>
      <h3>bla bla</h3>
      <p><img src="bla.jpg" alt="#">bla bla</p>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui, nihil soluta suscipit quas voluptatibus ea velit quidem consequatur repellat laborum mollitia eaque voluptatem reprehenderit iusto veritatis quasi quia eligendi totam!</p>
    </article>
    <!-- The Venue --> 
  </section>
  <!-- maincontent -->
  
  <aside id="sidebar" class="clearfix">
    <article id="comingtoevent">
      <h2 class="highlight">bla bla</h2>
      <h3>bla bla</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, quos quidem ipsum quisquam quia provident minima voluptatum vitae voluptatem molestias autem asperiores doloribus veniam esse nemo veritatis similique ullam! Perspiciatis.</p>
      <p><img src="images/#.png" alt="#"></p>
      <p><a class="link" href="#">bla bla</a></p>
    </article>
    <!-- Coming to event -->
    
    <article id="schedule">
      <h2>bla</h2>
      <h3>bla</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima saepe dicta sunt omnis quae aspernatur magnam voluptates reiciendis dolore. Doloribus nemo praesentium amet at explicabo, quasi consectetur totam laudantium sunt.</p>
      <h3>Tuesday</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, nesciunt sed nulla necessitatibus omnis quibusdam nam. Sapiente quod illum quasi explicabo dolore. Ex, inventore illum ullam dolore iste impedit tempora!</p>
      <p><a class="link" href="schedule/index.php">bla bla</a></p>
    </article>
    <!-- Schedule --> 
  </aside>
  <!-- Sidebar -->
        <footer>
    <div class="branding"> <img src="./images/logo.png" alt="Logo"> </div>
    <div class="description">bla bla</div>
    <nav>
      <ol>
        <li><a href="#">About the ClothingStore</a></li>
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Visit our website</a></li>
      </ol>
    </nav>
  
        <div class="footerBottom">        
            <?php include './includes/footer.php'; ?>
        </div>
      </footer>
</div>  
    </body>
</html>
