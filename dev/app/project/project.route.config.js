'use strict';

;(function () {

    angular
        .module('gandalf.project')
        .config(route);

    route.$inject = ['$stateProvider'];

    function route($stateProvider) {

        $stateProvider
            .state('project', {
                abstract: true,
                url: '/project',
                template: '<div ui-view></div>'
            })
            .state('project.project-id', {
                abstract: true,
                url: '/:projectId',
                template: '<container-project class="project-container"></container-project>'
            })
            .state('project.project-id.create', {
                url: '/new',
                template: '<create-project class="create-project"></create-project>'
            })
            .state('project.project-id.tables', {
                url: '/tables',
                template: '<div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium alias consequuntur cupiditate dicta doloremque enim exercitationem facilis, fugit, inventore labore laboriosam officiis, optio quis recusandae sit sunt suscipit ullam voluptatum?</p></div><table border="1"><caption>Таблица размеров обуви</caption><tr><th>Россия</th><th>Великобритания</th><th>Европа</th><th>Длина ступни, см</th></tr><tr><td>34,5</td><td>3,5</td><td>36</td><td>23</td></tr><tr><td>35,5</td><td>4</td><td>36⅔</td><td>23–23,5</td></tr><tr><td>36</td><td>4,5</td><td>37⅓</td><td>23,5</td></tr><tr><td>36,5</td><td>5</td><td>38</td><td>24</td></tr><tr><td>37</td><td>5,5</td><td>38⅔</td><td>24,5</td></tr><tr><td>38</td><td>6</td><td>39⅓</td><td>25</td></tr><tr><td>38,5</td><td>6,5</td><td>40</td><td>25,5</td></tr><tr><td>39</td><td>7</td><td>40⅔</td><td>25,5–26</td></tr><tr><td>40</td><td>7,5</td><td>41⅓</td><td>26</td></tr><tr><td>40,5</td><td>8</td><td>42</td><td>26,5</td></tr><tr><td>41</td><td>8,5</td><td>42⅔</td><td>27</td></tr><tr><td>42</td><td>9</td><td>43⅓</td><td>27,5</td></tr><tr><td>43</td><td>9,5</td><td>44</td><td>28</td></tr><tr><td>43,5</td><td>10</td><td>44⅔</td><td>28–28,5</td></tr><tr><td>44</td><td>10,5</td><td>45⅓</td><td>28,5–29</td></tr><tr><td>44,5</td><td>11</td><td>46</td><td>29</td></tr><tr><td>45</td><td>11,5</td><td>46⅔</td><td>29,5</td></tr><tr><td>46</td><td>12</td><td>47⅓</td><td>30</td></tr><tr><td>46,5</td><td>12,5</td><td>48</td><td>30,5</td></tr><tr><td>47</td><td>13</td><td>48⅔</td><td>31</td></tr><tr><td>48</td><td>13,5</td><td>49⅓</td><td>31,5</td></tr></table>'
            })
            .state('project.project-id.setting', {
                url: '/setting',
                template: '<p style="color: #fff;">!!!!!!!!!!!SETTING project</p>'
            })
            .state('project.project-id.history', {
                url: '/history',
                template: '<p style="color: #fff;">!!!!!!!!!!!HISTORY project</p>'
            });
            // .state('project.project-id.table', {
            //     abstract: true,
            //     url: '/table',
            //     template: '<ui-view></ui-view>'
            // })
            // .state('project.project-id.table.create', {
            //     url: '/create',
            //     template: '<table-create></table-create>'
            // })
            // .state('project.project-id.table.table-id', {
            //     abstract: true,
            //     url: '/:tabletId',
            //     template: '<ui-view></ui-view>'
            // })
            // .state('project.project-id.table.table-id.edit', {
            //     url: '/edit',
            //     template: '<table-edit></table-edit>'
            // });

    };

})();