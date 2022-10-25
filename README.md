# Test
/pangea_dental_app/app/views/users/shared/_profile_summary.html.erb
45~49
  <div class="py-5 break-words">
  <% if !user.userable.description.nil? %>
  <textarea class="text-gray-800 block text-md w-full focus:text-gray-700 focus:bg-white rounded focus:border-gray-700 transition ease-in-out focus:outline-none" name="user[designer][description]" id="user_designer_description" cols="40" rows="8" data-validate="true"><%= user.userable.description %></textarea>
  <% end %>
  </div>
