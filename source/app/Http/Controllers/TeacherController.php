<?php namespace App\Http\Controllers;

use App\UserLearnCourses;
use App\UserTeachCourses;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Laracasts\Flash\Flash;

class TeacherController extends Controller {

	/**
	* Display a listing of the resource.
	*
	* @return Response
	*/
	public function index()
	{

	}

	/**
	* Display the specified resource.
	*
	* @param  int  $id
	* @return Response
	*/
	public function show($id)
	{

	}

	/**
	* Show the form for editing the specified resource.
	*
	* @param  int  $id
	* @return Response
	*/
	public function edit($id)
	{

	}

	/**
	* Show the form for creating a new resource.
	*
	* @return Response
	*/
	public function create()
	{

	}

	public function accept(Request $request, $id)
	{
		$user_id = $request->user_id;
		$teacher = UserTeachCourses::where('user_id', $user_id)->where('course_id', $id)->first();

		if(!isset($teacher))
		{
			Flash::error('Erreur lors de la validation.');
			return Redirect::back();
		}

		$teacher->update(['validated'	=> 1]);

		return Redirect::back();
	}

	public function remove(Request $request, $id)
	{
		$user_id = $request->user_id;
		$teacher = UserTeachCourses::where('user_id', $user_id)->where('course_id', $id)->first();

		if(!isset($teacher))
		{
			Flash::error('Erreur lors de la suppression.');
			return Redirect::back();
		}

		$teacher->delete();

		return Redirect::back();
	}

	/**
	* Store a newly created resource in storage.
	*
	* @return Response
	*/
	public function store()
	{

	}

	/**
	* Update the specified resource in storage.
	*
	* @param  int  $id
	* @return Response
	*/
	public function update($id)
	{

	}

	/**
	* Remove the specified resource from storage.
	*
	* @param  int  $id
	* @return Response
	*/
	public function destroy($id)
	{

	}

}

?>