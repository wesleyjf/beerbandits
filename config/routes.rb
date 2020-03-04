Rails.application.routes.draw do
  root to: 'pages#home'
  get 'about', to: 'pages#about'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'preferences', to: 'search#preferences', as: :preferences
  get 'preferences/results', to: 'search#results', as: :results
  
end
