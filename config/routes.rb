Rails.application.routes.draw do
  root to: 'pages#home'
  get 'about', to: 'pages#about'
  
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'preferences', to: 'search#preferences', as: :preferences
  get 'preferences/results', to: 'search#results', as: :results
  get 'favourites', to: 'favourites#index', as: :favourites
  
  get 'style-guide', to: 'pages#style_guide'

  delete 'favourites/:id', to: 'favourites#destroy', as: :favourites_delete
  patch 'favourites/:id/toggle', to: 'favourites#toggle_favourite', as: :favourites_toggle_favourite
  patch 'favourites/:id', to: 'favourites#update', as: :favourites_update
end
