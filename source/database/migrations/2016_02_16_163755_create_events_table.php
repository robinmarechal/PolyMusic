<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;

class CreateEventsTable extends Migration {

	public function up()
	{
		Schema::create('events', function(Blueprint $table) {
			$table->increments('id');
			$table->timestamps();
			$table->text('location');
			$table->tinyInteger('day')->index();
			$table->time('start');
			$table->time('end');
			$table->text('infos');
			$table->string('name', 255);
			$table->string('slug', 255)->index();
			$table->integer('article_id')->index()->unsigned();
		});
	}

	public function down()
	{
		Schema::drop('events');
	}
}