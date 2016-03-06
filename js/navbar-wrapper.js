document.write(`
<div class="navbar-wrapper">
  <div class="navbar navbar-inverse navbar-fixed-top" style="border-radius: 0">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="img-thumbnail" href="index.html" style="background-color: #ffffff; margin-left: -10px; padding-left: 10px; padding-right: 15px"><img src="media/logo.png" style="background-color: #ffffff; margin-left: -5px" width="50px" alt="McKinney Boyd High School"></a>
      </div>
			<div class="collapse navbar-collapse" id="navbarcollapse">
				<div style="float: none;">
				<ul class="nav navbar-nav">
					<!--<li class="active"><a href="#">Home <span class="sr-only">(current)</span></a></li>-->
					<li class="dropdown">
						<a href="about.html" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">About <span class="caret"></span></a>
						<ul class="dropdown-menu">
`);
							if ( isAbout ) { document.write('<li class="active"><a href="#">About us</a></li>'); } else { document.write('<li><a href="about.html">About us</a></li>'); }
							if ( isAcademics ) { document.write('<li class="active"><a href="#">Academics</a></li>'); } else { document.write('<li><a href="academics.html">Academics</a></li>'); }
              if ( isAdministration ) { document.write('<li class="active"><a href="#">Administration</a></li>'); } else { document.write('<li><a href="administration.html">Administration</a></li>'); }
							document.write('<li><a href="http://departments.mckinneyisd.net/athletics/schools/mckinney-boyd-high-school/">Athletics</a></li>');
							if ( isContact ) { document.write('<li class="active"><a href="#">Contact us</a></li>'); } else { document.write('<li><a href="contact.html">Contact us</a></li>'); }
              if ( isCounselors ) { document.write('<li class="active"><a href="#">Counselors</a></li>'); } else { document.write('<li><a href="counselors.html">Counselors</a></li>'); }
              if ( isFaculty ) { document.write('<li class="active"><a href="#">Faculty</a></li>'); } else { document.write('<li><a href="faculty.html">Faculty</a></li>'); }
							if ( isFineArts ) { document.write('<li class="active"><a href="#">Fine Arts</a></li>'); } else { document.write('<li><a href="finearts.html">Fine Arts</a></li>'); }
							document.write('<li role="separator" class="divider"></li>');
							document.write('<li><a href="media/CIP Full Report_MBHS.pdf">Campus Improvement Plan</a></li>');
							document.write('<li><a href="media/2012-2013_MBHS_CTIP.pdf">Campus Technology Integration Plan</a></li>');
document.write(`
            </ul>
					</li>
					<li class="dropdown">
						<a href="resources.html" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Resources <span class="caret"></span></a>
						<ul class="dropdown-menu">
`);
              if ( isAttendance ) { document.write('<li class="active"><a href="#">Attendance</a></li>'); } else { document.write('<li><a href="attendance.html">Attendance</a></li>'); }
              if ( isBellSchedule ) { document.write('<li class="active"><a href="#">Bell schedule</a></li>'); } else { document.write('<li><a href="bellschedule.html">Bell schedule</a></li>'); }
              if ( isCounselors ) { document.write('<li class="active"><a href="#">Counselors</a></li>'); } else { document.write('<li><a href="counselors.html">Counselors</a></li>'); }
              if ( isForms ) { document.write('<li class="active"><a href="#">More forms...</a></li>'); } else { document.write('<li><a href="forms.html">More forms...</a></li>'); }
              if ( isParking ) { document.write('<li class="active"><a href="#">Parking</a></li>'); } else { document.write('<li><a href="parking.html">Parking</a></li>'); }
							document.write('<li><a href="http://mckinneyisd.wufoo.com/forms/incident-report-form/http/true/">Incident Report Form</a></li>');
              if ( isRegistration ) { document.write('<li class="active"><a href="#">Registration</a></li>'); } else { document.write('<li><a href="registration.html">Registration</a></li>'); }
              if ( isTestingSchedule ) { document.write('<li class="active"><a href="#">Testing schedule</a></li>'); } else { document.write('<li><a href="testingschedule.html">Testing schedule</a></li>'); }
              if ( isVOE ) { document.write('<li class="active"><a href="#">Verification of Enrollment</a></li>');} else { document.write('<li><a href="voe.html">Verification of Enrollment</a></li>'); }
              document.write('<li role="separator" class="divider"></li>');
							if ( isResources ) { document.write('<li class="active"><a href="#">All resources</a></li>'); } else { document.write('<li><a href="resources.html">All resources</a></li>'); }
document.write(`
            </ul>
					</li>
					<li class="dropdown">
						<a href="news.html" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">News & events <span class="caret"></span></a>
						<ul class="dropdown-menu">
`);
							document.write('<li><a href="http://www.boydbnn.com">BNN</a></li>');
							document.write('<li><a href="http://www.boydspur.com">Boyd Spur</a></li>');
              if ( isBroncoBeat ) { document.write('<li class="active"><a href="#">Bronco Beat</a></li>'); } else { document.write('<li><a href="broncobeat.html">Bronco Beat</a></li>'); }
              if ( isCalendar ) { document.write('<li class="active"><a href="#">Calendar</a></li>'); } else { document.write('<li><a href="calendar.html">Calendar</a></li>'); }
							document.write('<li><a href="https://www.facebook.com/mbhsbroncos">Facebook</a></li>');
							document.write('<li><a href="https://twitter.com/broncotweet">Twitter</a></li>');
              document.write('<li role="separator" class="divider"></li>');
              if ( isNews ) { document.write('<li class="active"><a href="#">News</a></li>'); } else { document.write('<li><a href="news.html">News sources</a></li>'); }
document.write(`
            </ul>
					</li>
					<li class="dropdown">
						<a href="students.html" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Students <span class="caret"></span></a>
						<ul class="dropdown-menu">
`);
							if ( isStudents ) { document.write('<li class="active"><a href="#">Students</a></li>'); } else { document.write('<li><a href="students.html">Student Center</a></li>'); }
              document.write('<li role="separator" class="divider"></li>');
							if ( isBellSchedule ) { document.write('<li class="active"><a href="#">Bell schedule</a></li>'); } else { document.write('<li><a href="bellschedule.html">Bell schedule</a></li>'); }
							if ( isClubs ) { document.write('<li class="active"><a href="#">Clubs & organizations</a></li>'); } else { document.write('<li><a href="clubs.html">Clubs & organizations</a></li>'); }
              if ( isOne2TheWorld ) { document.write('<li class="active"><a href="#">One 2 The World MacBook Air info</a></li>'); } else { document.write('<li><a href="one2world.html">One 2 The World MacBook Air info</a></li>'); }
							if ( isParking ) { document.write('<li class="active"><a href="#">Parking</a></li>'); } else { document.write('<li><a href="parking.html">Parking</a></li>'); }
              document.write('<li><a href="http://mbhsstuco.weebly.com">Student Council</a></li>');
							if ( isStudentLife ) { document.write('<li class="active"><a href="#">Student Life</a></li>'); } else { document.write('<li><a href="studentlife.html">Student Life</a></li>'); }
document.write(`
            </ul>
					</li>
					<li class="dropdown">
						<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">More <span class="caret"></span></a>
						<ul class="dropdown-menu">
							<li><a href="http://www.boydlibrary.com">Library</a></li>
							<li><a href="http://www.orgsites.com/tx/boydpto/index.html">PTO</a></li>
						</ul>
					</li>
				</ul>
        <form class="navbar-form navbar-left" role="search" method="get" action="https://www.google.com/search">
          <input type="hidden" name="as_sitesearch" value="legacy.mckinneyisd.net">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Search" name="as_q">
          </div>
          <button type="submit" class="btn btn-default">Find</button>
        </form>
				<ul class="nav navbar-nav navbar-right">
					<li class="dropdown">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Quick Links <span class="caret"></span></a>
					<ul class="dropdown-menu">
          	<li><a href="http://www.mckinneyisd.net/parents/index.asp#apg">Academic Planning Guide</a></li>
          	<li><a href="https://canvas.mckinneyisd.net/">Canvas</a></li>
            <li><a href="https://fsc2.mckinneyisd.net">Destiny</a></li>
						<li><a href="https://hac.mckinneyisd.net/HomeAccess/">Home Access Center</a></li>
						<li><a href="https://connection.naviance.com/family-connection/auth/login/?hsid=mcKinneybhs">Naviance</a></li>
						<li role="separator" class="divider"></li>
						<li><a href="http://www.mckinneyisd.net">McKinney ISD</a></li>
					</ul>
					</li>
				</ul>
				</div>
			</div><!-- /.navbar-collapse -->
   </div>
  </div>
</div>
</div>
<hr style="height:10px; visibility:hidden;" />
`);
