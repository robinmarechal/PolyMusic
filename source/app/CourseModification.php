<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CourseModification extends Model {

	protected $table = 'course_modifications';
	public $timestamps = true;
	protected $fillable = array('author_id', 'user_id', 'course_id', 'message', 'value');

	public function course()
	{
		return $this->hasOne('Course', 'course_id');
	}

	public function author()
	{
		return $this->hasOne('User', 'author_id');
	}

	public function user()
	{
		return $this->hasOne('User', 'user_id');
	}

}