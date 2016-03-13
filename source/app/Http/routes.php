<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('test', function()
{	
	return view('test');
});

Route::post('test', function()
{
	echo 'Sucess !';
});

Route::get('/', function()
{
	return View::make('welcome');
});


// ____________________________________________________________________________________________________
//
//                         					AUTH ROUTES
// ____________________________________________________________________________________________________

Route::get('auth/login', 'Auth\AuthController@getLogin')		->name('login')			->middleware('guest');
Route::get('auth/register', 'Auth\AuthController@getRegister')  ->name('register')		->middleware('guest');
Route::get('auth/logout', 'Auth\AuthController@logout')			->name('logout')		->middleware('auth');

Route::post('auth/login', 'Auth\AuthController@login')			->name('login')			->middleware('guest');
Route::post('auth/register', 'Auth\AuthController@register')	->name('register')		->middleware('guest');


// ____________________________________________________________________________________________________
//
//                         					NEWS ROUTES
// ____________________________________________________________________________________________________

Route::get('news', 'NewsController@index')						->name('news.index');
Route::get('news/view/{slug}', 'NewsController@show')			->name('news.view');


// ____________________________________________________________________________________________________
//
//                         					ANNOUCEMENT ROUTES
// ____________________________________________________________________________________________________

Route::get('announcements', 'AnnouncementController@index')					->name('announcements.index');
Route::get('announcements/create', 'AnnouncementController@create')			->name('announcements.create')		->middleware('auth');
Route::get('announcements/edit/{slug}', 'AnnouncementController@edit')		->name('announcements.edit')		->middleware('auth');
Route::get('announcements/view/{slug}', 'AnnouncementController@show')		->name('announcements.view');
Route::get('announcements/delete/{slug}', 'AnnouncementController@delete')	->name('announcements.delete')		->middleware('auth');


Route::post('announcements/create', 'AnnouncementController@store')			->name('announcements.create')		->middleware('auth');
Route::post('announcements/edit/{slug}', 'AnnouncementController@update')	->name('announcements.edit')		->middleware('auth');
Route::post('announcements/delete/{slug}', 'AnnouncementController@destroy')->name('announcements.delete')		->middleware('auth');


// ____________________________________________________________________________________________________
//
//                         					COMMENT ROUTES
// ____________________________________________________________________________________________________

Route::post('announcements/comment/create', 'CommentController@store')	->name('comments.create')	->middleware('auth');
Route::post('comment/edit/{id}', 'CommentController@update')	->name('comments.update')	->middleware('auth');
Route::post('comment/delete/{id}', 'CommentController@destroy')	->name('comments.destroy')	->middleware('auth');


// ____________________________________________________________________________________________________
//
//                         					COURSE ROUTES
// ____________________________________________________________________________________________________

Route::get('courses', 'CourseController@index')			->name('course.index');
Route::get('courses/{slug}', 'CourseController@show')	->name('course.show');

Route::post('courses/{slug}', 'CourseController@toggleSignUp')	->name('course.togglesignup');



Route::get('notifications', 'NotificationController@index')->name('notification.index')->middleware('auth');

// ____________________________________________________________________________________________________
//
//                         					USER ROUTES
// ____________________________________________________________________________________________________

Route::get('users/{slug}', 'UserController@show')	->name('user.show');


// ____________________________________________________________________________________________________
//
//                         					ARTICLES ROUTES
// ____________________________________________________________________________________________________

Route::get('articles/view/{slug}', 'ArticleController@show') ->name('article.show');



// ____________________________________________________________________________________________________
//
//                         					BAND ROUTES
// ____________________________________________________________________________________________________

Route::get('bands/show/{slug}', 'BandController@show')	->name('bands.show');


// ____________________________________________________________________________________________________
//
//                         					EVENT ROUTES
// ____________________________________________________________________________________________________

Route::get('events/edit/{id}', 'EventController@edit')->name('events.edit')->middleware('level:2');
// Route::get('events/show/{slug}')
Route::get('events/manage/{id}', 'EventController@manage')->name('events.manage')->middleware('level:2');

Route::post('events/delete/{id}', 'EventController@destroy')->name('events.destroy')->middleware('level:2');
Route::post('events/edit/{id}', 'EventController@update')->name('events.update')->middleware('level:2');


//====================================================================================================================================


// ____________________________________________________________________________________________________
//
//                         				ADMIN BACKOFFICE ROUTES
// ____________________________________________________________________________________________________

Route::group(['prefix' => 'admin', 'middleware' => 'level:3'], function(){

	Route::get('/', function(){
		return view('admin.index');
	});

	Route::get('categories', 'CategoryController@index')	->name('category.index');
	Route::get('categories/edit/{id}', 'CategoryController@edit')	->name('category.edit');

	Route::post('categories/edit', 'CategoryController@update')	->name('category.update');
	Route::post('categories/delete/{id}', 'CategoryController@destroy')	->name('category.destroy');

	Route::get('users', 'UserController@index')	->name('users.index');


	Route::get('modifications', 'ModificationController@index')			   ->name('modifs.index');
	Route::get('modifications/courses', 'ModificationController@courses')  ->name('modifs.courses');
	Route::get('modifications/courses/{id}', 'ModificationController@oneCourse')  ->name('modifs.onecourses');

// _____________________________________________________________________________________________________________

	// ANNOUNCEMENTS : GET
	Route::get('announcements', 	'AnnouncementController@adminIndex')	->name('announcements.adminindex');
	Route::get('announcements/{category}', 	'AnnouncementController@adminIndex')	->name('announcements.adminindexcategory');
	Route::get('announcements/validated/{value}', 	'AnnouncementController@adminIndexValidated')	->name('announcements.adminindexvalidated');
	Route::get('announcements/validate/{id}', 'AnnouncementController@validatePost')->name('announcements.validate');

// _____________________________________________________________________________________________________________

	// NEWS : GET
	Route::get('news',					'NewsController@adminIndex')->name('news.adminindex');
	Route::get('news/edit/{slug}', 		'NewsController@edit')		->name('news.edit');
	Route::get('news/create', 			'NewsController@create')	->name('news.create');
	Route::get('news/delete/{slug}', 	'NewsController@delete')	->name('news.delete');
	Route::get('news/validated/{value}','NewsController@validated')	->name('news.validated');
	Route::get('news/activate/{id}', 	'NewsController@activate')->name('news.active');
	
	// NEWS : POST
	Route::post('news/create', 			'NewsController@store')		->name('news.store');
	Route::post('news/edit/{slug}', 	'NewsController@update')	->name('news.update');
	Route::post('news/delete/{id}', 	'NewsController@destroy')	->name('news.destroy');

// _____________________________________________________________________________________________________________

	Route::get('bands', 'BandController@adminIndex')	->name('bands.adminindex');
	Route::get('bands/edit/{id}', 'BandController@edit')	->name('bands.edit');
	Route::get('bands/manage/{id}', 'BandController@manage')	->name('bands.manage');

	Route::post('bands/edit/{id}', 'BandController@update')	->name('bands.update');

// _____________________________________________________________________________________________________________



	// ARTICLES : GET
	Route::get('articles',					'ArticleController@adminIndex')	->name('articles.adminindex');
	Route::get('articles/{category}',		'ArticleController@adminIndex')	->name('articles.adminIndexCategory');
	Route::get('articles/validated/{value}','ArticleController@adminIndexValidated')->name('articles.adminIndexValidated');
	Route::get('articles/create', 			'ArticleController@create')		->name('articles.create');
	Route::get('articles/edit/{slug}', 		'ArticleController@edit')		->name('articles.edit');
	Route::get('articles/delete/{slug}', 	'ArticleController@delete') 	->name('articles.delete');
	Route::get('articles/validate/{id}', 	'ArticleController@validatePost')	->name('articles.validate');

	// ARTICLES : POST
	Route::post('articles/create', 			'ArticleController@store')	->name('articles.store');
	Route::post('articles/edit/{slug}', 	'ArticleController@update')	->name('articles.update');
	Route::post('articles/delete/{slug}', 	'ArticleController@destroy')->name('articles.destroy');


// _____________________________________________________________________________________________________________

	// INSTRUMENTS : GET
	Route::get('instruments', 'InstrumentController@index')				->name('instruments.index');
	Route::get('instruments/edit/{id}', 'InstrumentController@edit') 	->name('instruments.edit');
	Route::get('instruments/create', 'InstrumentController@create')		->name('instruments.create');

	// INSTRUMENTS : POST
	Route::post('instruments/create', 'InstrumentController@store') 		->name('instruments.store');
	Route::post('instruments/edit/{id}', 'InstrumentController@update')		->name('instruments.update');
	Route::post('instruments/delete/{id}', 'InstrumentController@destroy')	->name('instruments.destroy');


// _____________________________________________________________________________________________________________

	// COURSES : GET
	Route::get('courses', 					'CourseController@adminIndex')	->name('courses.adminindex');
	Route::get('courses/create', 			'CourseController@create')		->name('courses.create');
	Route::get('courses/edit/{id}', 		'CourseController@edit')		->name('courses.edit');
	Route::get('courses/delete/{slug}', 	'CourseController@delete')		->name('courses.delete');
	Route::get('courses/{slug}/members',	'CourseController@members')		->name('courses.members');
	Route::get('courses/instrument/{id}', 	'CourseController@instrument')	->name('courses.ofInstrument');
	Route::get('courses/{id}/documents', 	'CourseController@documents')	->name('courses.documents');
	Route::get('courses/{id}/documents/validation/{value}', 	'CourseController@documentsValidated')	->name('courses.docsValidated');

	// COURSES : POST
	Route::post('courses/create', 			'CourseController@store')		->name('courses.create');
	Route::post('courses/edit/{id}', 		'CourseController@update')		->name('courses.edit');
	Route::post('courses/delete/{slug}', 	'CourseController@destroy')		->name('courses.delete');
	
	Route::post('courses/{id}/student/remove','StudentController@remove')	->name('courses.removestudent');
	Route::post('courses/{id}/teacher/remove','TeacherController@remove')	->name('courses.removeteacher');
	Route::post('courses/{id}/student/accept','StudentController@accept')	->name('courses.acceptstudent');
	Route::post('courses/{id}/teacher/accept','TeacherController@accept')	->name('courses.acceptteacher');


// _____________________________________________________________________________________________________________

	Route::get('events', 'EventController@adminIndex')									->name('events.adminindex');
	Route::post('events/{event_id}/removeband/{band_id}', 'EventController@removeBand')	->name('events.removeBand');
	Route::post('events/{event_id}/addband/{band_id}', 'EventController@addband')		->name('events.addband');
	Route::get('events', 'EventController@adminIndex')									->name('events.adminindex');
// _____________________________________________________________________________________________________________


	// USERS : GET
	Route::get('users',	'UserController@index')					->name('users.index');
	Route::get('users/edit/{slug}', 'UserController@edit')		->name('user.edit');	
	Route::post('users/edit/{slug}', 'UserController@update')	->name('user.update');

// _____________________________________________________________________________________________________________

	Route::get('documents', 'DocumentController@index')->name('documents.index');
	Route::get('documents/user/{id}', 'DocumentController@fromUser')->name('documents.fromuser');
	Route::get('documents/course/{id}', 'DocumentController@forCourse')->name('documents.forcourse');
	Route::get('documents/edit/{id}', 'DocumentController@edit')->name('documents.edit');

	Route::post('documents/validate', 'DocumentController@toggle')->name('documents.validate');
	Route::post('documents/unvalidate', 'DocumentController@toggle')->name('documents.unvalidate');
	Route::post('documents/delete', 'DocumentController@destroy')->name('documents.destroy');
	Route::post('documents/update', 'DocumentController@update')->name('documents.update');


// ____________________________________________________________________________________________________
//
//                         				ADMIN BACKOFFICE ROUTES
// ____________________________________________________________________________________________________

	// LEVELS : GET
	Route::get('levels', 					'LevelController@index')	->name('levels.index')		->middleware('level:4');
	Route::get('levels/create', 			'LevelController@create')	->name('levels.create')		->middleware('level:4');
	Route::get('levels/edit/{level}', 		'LevelController@edit')		->name('levels.edit')		->middleware('level:4');
	Route::get('levels/delete/{level}', 	'LevelController@delete')	->name('levels.delete')		->middleware('level:4');
	Route::get('levels/{name}/members', 	'LevelController@members')	->name('levels.members')	->middleware('level:4');


	// LEVELS : POST
	Route::post('levels/create', 			'LevelController@store')	->name('levels.store')		->middleware('level:4');
	Route::post('levels/edit/{level}', 		'LevelController@update')	->name('levels.update')		->middleware('level:4');
	Route::post('levels/delete/{level}', 	'LevelController@destroy')	->name('levels.destoy')		->middleware('level:4');
	Route::post('levels/{id}/members/remove', 'LevelController@removeMember')->name('levels.removemember')->middleware('level:4');


// _____________________________________________________________________________________________________________

	// DEPARTEMENTS : GET
	Route::get('departments', 'DepartmentController@index')					->name('departments.index')		->middleware('level:4');
	Route::get('departments/create', 'DepartmentController@create')			->name('departments.create')	->middleware('level:4');
	Route::get('departments/edit/{id}', 'DepartmentController@edit')		->name('departments.edit')		->middleware('level:4');
	Route::get('departments/delete/{id}', 'DepartmentController@delete')	->name('departments.delete')	->middleware('level:4');
	Route::get('departments/{id}/members', 'DepartmentController@members')	->name('departments.members')	->middleware('level:4');

	// DEPARTEMENTS : POST
	Route::post('departments/create', 'DepartmentController@store')			->name('departments.store')		->middleware('level:4');
	Route::post('departments/edit/{id}', 'DepartmentController@update')		->name('departments.update')	->middleware('level:4');
	Route::post('departments/delete/{id}', 'DepartmentController@destroy')	->name('departments.destroy')	->middleware('level:4');
	Route::post('departments/{id}/members/remove', 'DepartmentController@removemember')->name('departments.removemember')->middleware('level:4');


	// BLACKLIST : GET
});


// ____________________________________________________________________________________________________
//
//                         				ADMIN BACKOFFICE ROUTES
// ____________________________________________________________________________________________________

