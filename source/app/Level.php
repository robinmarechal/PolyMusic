<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Level extends Model
{
    protected $table 	= 'levels';
    protected $fillable = ['level', 'name'];
    protected $hidden 	= [];
}
