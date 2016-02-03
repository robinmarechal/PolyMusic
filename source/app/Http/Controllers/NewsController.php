<?php namespace App\Http\Controllers;

use App\News;
use Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Auth;
use Laracasts\Flash\Flash;

class NewsController extends Controller {



// ________________________________________________________________
//
//                          GET REQUESTS 
// ________________________________________________________________

  /**
   * Display a listing of the resource.
   *
   * @return Response
   */
  public function index()
  {
    $news = News::where('active', 1)->orderBy('id', 'desc')->get();
    return view('news.index', compact('news'));
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return Response
   */
  public function create()
  {
    return view('news.create');
  }

   /**
  * Display news removing form
  * @param $slug news' slug
  * @return news.delete view
  */
  public function delete($slug)
  {
    $news = News::where('slug', $slug)->first();
    if(empty($news) || $news->active == 0)
    {
      Flash::error('Cette news n\'existe pas ou a déjà été supprimée.');
      return redirect('news');
    }

    return view('views.delete', compact('news'));
  }

  /**
   * Display the specified resource.
   *
   * @param  int  $slug
   * @return Response
   */
  public function show($slug)
  {
    $news = News::where('slug', $slug)->first();
    if(empty($news) || $news->active == 0)
    {
      Flash::error('Cette news n\'existe pas.');
      return redirect('news');
    }

    return view('news.index', compact('news'));
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  int  $slug
   * @return Response
   */
  public function edit($slug)
  {
    $news = News::where('slug', $slug)->first();
    if(empty($news) || $news->active == 0)
    {
      Flash::error('Cette news n\'existe pas.');
      return redirect('news/index');
    }
    return view('news.edit', compact('news'));
  }




// ________________________________________________________________
//
//                         POST REQUESTS
// ________________________________________________________________

  /** 
  * Check if $data respects the rules
  * @param $data inputs
  * @return true/false
  */
  protected function validator($data)
  {
    return Validator::make($data, [
      'title'   => 'required|min:6|max:255',
      'content' => 'required|min:15|unique:news',
      ]);
  }

  /**
   * Store a newly created resource in storage.
   *
   * @return Response
   */
  public function store(Request $request)
  {
    $validation = $this->validator($request->all());
    if($validation->fails())
    {
      Flash::error('Impossible de créer la news. Veuillez vérifier les champs renseignés.');
      return Redirect::back()->withErrors($validation->errors());
    }

    $news = News::create([
      'title'   => $request->title,
      'content' => $request->content,
      'user_id' => Auth::user()->id,
      ]);

    $slug = str_slug($request->title . '-' . $news->id);

    $news->update([
      'slug' => $slug,
      ]);

    Flash::success('La news a bien été créée ! ');
    return redirect('news/view/' . $slug);
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  int  $slug
   * @return Response
   */
  public function update(Request $request, $slug)
  {
    $validation = $this->validator($request->all);
    if($validation->fails())
    {
      Flash::error('Impossible de modifier la news. Veuillez vérifier les champs renseignés.');
      return Redirect::back()->withErrors($validation->errors());
    }
    $news = News::where('slug', $slug)->first();

    $slug = str_slug($request->title . '-' . $news->id);

    $news = News::update([
      'title'   => $request->title,
      'content' => $request->content,
      'user_id' => Auth::user()->id,
      'slug' => $slug,
      ]);

    Flash::success('La news a bien été modifiée ! ');
    return redirect('news/view/' . $slug);  
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int  $slug
   * @return Response
   */
  public function destroy(Request $request, $slug)
  {
    News::where('slug', $slug)->first()->delete();
    Flash::success('La news a bien été supprimée.');
    return redirect('news');
  }

}

?>