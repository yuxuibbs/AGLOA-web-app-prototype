$(document).ready(function() {
    document.getElementById('insertNavBar').innerHTML =`
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
      <div class="container">
        <a class="navbar-brand" href="index.html">
            <div class="pull-left">
                <img src="img/cropped-AGLOA_logo_header_133x90.png" alt="AGLOA logo">
            </div>
            <div id="title" class="pull-right">
                <h1 class="site-title">
                    <a href="index.html" rel="home">Academic Games Leagues of America</a>
                </h1>
                <div class="site-description">
                    <ul>
                        <li>
                            AGLOA | Promoting Excellence Through Academic Competition
                        </li>
                        <li class="facebook">
                            <a href="http://facebook.com/AGLOA" title="Academic Games Leagues of America on Facebook" target="_blank"><i class="fab fa-facebook-square"></i></a>
                        </li>
                        <li class="twitter">
                            <a href="http://twitter.com/AGLOA" title="Academic Games Leagues of America on Twitter" target="_blank"><i class="fab fa-twitter-square"></i></a>
                        </li>
                        <li class="youtube">
                            <a href="http://youtube.com/AGLOAczeller" title="Academic Games Leagues of America on YouTube" target="_blank"><i class="fab fa-youtube-square"></i></a>
                        </li>
                        <li class="instagram">
                            <a href="http://instagram.com/AGLOA" title="Academic Games Leagues of America on Instagram" target="_blank"><i class="fab fa-instagram"></i></a>
                        </li>
                        <li class="email">
                            <a href="mailto:info@agloa.org" title="Academic Games Leagues of America on Email" target="_blank"><i class="fa fa-envelope"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="schedule.html">Schedule</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="map.html">Map</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="player_info.html">Player Information</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="results.html">Results</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    `;
});