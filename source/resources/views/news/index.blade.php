{{-- 
	Index des news
	Tu listes toutes les news avec un @forelse (regarde la doc, le forelse est super pratique). Variable : $news. tu récuperes les infos avec $news->title, $news->content (a la place de $news c'est la variable du foreach biensur) etc...
	Si l'utilisateur a un level > 0 ( @if(Auth::user()->level > 0) ) , tu rajoutes qqch pour modifier, qui link vers events/edit/slug avec slug qui est le slug de l'événement
 --}}

@extends('layouts.app')

@section('content')
<h1 style="text-align: center">News</h1>
@if(isset($news))
	@forelse($news as $n)
		<div class="frame-news">
			<h2><a href="{{ url('news/view/'.$n['slug'])}}">{{$n['title']}}</a>
				@if(Auth::check() && Auth::user()->level >= 1)
					<a class="icon" href="{{ url('admin/news/edit/'.$n['slug']) }}"><span class="glyphicon glyphicon-pencil"></span></a>				
					<a class="icon" href="{{ url('admin/news/delete/'.$n['slug']) }}"><span class="glyphicon glyphicon-trash"></span></a>
				@endif
			</h2>
			<p>{{$n['content']}} <br/>
				<div class="news-infos" align="right">Créée par 
					<a href="{{ url('user/'.App\User::where('id', $n['user_id'])->first()->slug)}}">
						<b>{{ App\User::where('id', $n['user_id'])->first()->first_name }}</b>
					</a> le {{date_format($n['created_at'], 'd/m/Y')}}
				</div>
			</p>
		</div>
		<br/>	
	@empty
	@endforelse
@else
    <li class="list-group-item"><p>Pas de news pour le moment.</p></li>  
@endif

<div style="text-align: right">
	<ul class="pagination pagination-sm">
	  <li class="disabled"><a href="#">&laquo;</a></li>
	  <li class="active"><a href="#">1</a></li>
	  <li><a href="#">2</a></li>
	  <li><a href="#">3</a></li>
	  <li><a href="#">4</a></li>
	  <li><a href="#">5</a></li>
	  <li><a href="#">&raquo;</a></li>
	</ul>
</div>

<style type="text/css">
.icon{
	font-size: 40%;
	color: inherit;
	opacity: 0.3;
	-webkit-transition: all 0.1s ease-in-out;
	-moz-transition: all 0.1s ease-in-out;
	-ms-transition: all 0.1s ease-in-out;
	-o-transition: all 0.1s ease-in-out;
	transition: all 0.1s ease-in-out;
}

.icon:hover{
	opacity: 1;
	font-size: 70%;
}
</style>

@endsection