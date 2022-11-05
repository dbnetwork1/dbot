$(document).ready(function() {

    var SimilarWordsExecuted = false;
    var MentionsExecuted = false;
    var CapitalsExecuted = false;
    var EmojisExecuted = false;
    var InvitesExecuted = false;
    var JoinsExecuted = false;
    var SwearingExecuted = false;
    var SpamExecuted = false;
    var FilesExecuted = false;
    var SpoilersExecuted = false;
    var IgnoredRolesExecuted = false;

    $("#SimilarSettings").click(function(){

        if (SimilarWordsExecuted) {void(0)}
        else{
            SimilarWordsExecuted = true;

            var select = $('#SimilarSelect');
            var options = select.find('option');

            var div = $('<div />').addClass('selectMultiple');
            var active = $('<div />');
            var list = $('<ul />');
            var placeholder = select.data('placeholder');

            var span = $('<span />').text(placeholder).appendTo(active);

            options.each(function() {
                var text = $(this).text();
                if($(this).is(':selected')) {
                    active.append($('<a />').html('<em>' + text + '</em><i></i>'));
                    span.addClass('hide');
                } else {
                    list.append($('<li />').html(text));
                }
            });

            active.append($('<div />').addClass('arrow'));
            div.append(active).append(list);

            select.wrap(div);
            }

        $(document).on('click', '.selectMultiple ul li', function(e) {
            var select = $(this).parent().parent();
            var li = $(this);
            if(!select.hasClass('clicked')) {
                select.addClass('clicked');
                li.prev().addClass('beforeRemove');
                li.next().addClass('afterRemove');
                li.addClass('remove');
                var a = $('<a />').addClass('notShown').html('<em>' + li.text() + '</em><i></i>').hide().appendTo(select.children('div'));
                a.slideDown(400, function() {
                    setTimeout(function() {
                        a.addClass('shown');
                        select.children('div').children('span').addClass('hide');
                        select.find('option:contains(' + li.text() + ')').prop('selected', true);
                    }, 500);
                });
                setTimeout(function() {
                    if(li.prev().is(':last-child')) {
                        li.prev().removeClass('beforeRemove');
                    }
                    if(li.next().is(':first-child')) {
                        li.next().removeClass('afterRemove');
                    }
                    setTimeout(function() {
                        li.prev().removeClass('beforeRemove');
                        li.next().removeClass('afterRemove');
                    }, 200);

                    li.slideUp(400, function() {
                        li.remove();
                        select.removeClass('clicked');
                    });
                }, 600);
            }
        });

        $(document).on('click', '.selectMultiple > div a', function(e) {
            var select = $(this).parent().parent();
            var self = $(this);
            self.removeClass().addClass('remove');
            select.addClass('open');
            setTimeout(function() {
                self.addClass('disappear');
                setTimeout(function() {
                    self.animate({
                        width: 0,
                        height: 0,
                        padding: 0,
                        margin: 0
                    }, 300, function() {
                        var li = $('<li />').text(self.children('em').text()).addClass('notShown').appendTo(select.find('ul'));
                        li.slideDown(400, function() {
                            li.addClass('show');
                            setTimeout(function() {
                                select.find('option:contains(' + self.children('em').text() + ')').prop('selected', false);
                                if(!select.find('option:selected').length) {
                                    select.children('div').children('span').removeClass('hide');
                                }
                                li.removeClass();
                            }, 400);
                        });
                        self.remove();
                    })
                }, 300);
            }, 400);
        });

        $(document).on('click', '.selectMultiple > div .arrow, .selectMultiple > div span', function(e) {
            $(this).parent().parent().toggleClass('open');
        });
    });
    $("#MentionsSettings").click(function(){

        if (MentionsExecuted) {void(0)}
        else{
            MentionsExecuted = true;

            var select = $('#MentionsSelect');
            var options = select.find('option');

            var div = $('<div />').addClass('selectMultiple');
            var active = $('<div />');
            var list = $('<ul />');
            var placeholder = select.data('placeholder');

            var span = $('<span />').text(placeholder).appendTo(active);

            options.each(function() {
                var text = $(this).text();
                if($(this).is(':selected')) {
                    active.append($('<a />').html('<em>' + text + '</em><i></i>'));
                    span.addClass('hide');
                } else {
                    list.append($('<li />').html(text));
                }
            });

            active.append($('<div />').addClass('arrow'));
            div.append(active).append(list);

            select.wrap(div);
            }

        $(document).on('click', '.selectMultiple ul li', function(e) {
            var select = $(this).parent().parent();
            var li = $(this);
            if(!select.hasClass('clicked')) {
                select.addClass('clicked');
                li.prev().addClass('beforeRemove');
                li.next().addClass('afterRemove');
                li.addClass('remove');
                var a = $('<a />').addClass('notShown').html('<em>' + li.text() + '</em><i></i>').hide().appendTo(select.children('div'));
                a.slideDown(400, function() {
                    setTimeout(function() {
                        a.addClass('shown');
                        select.children('div').children('span').addClass('hide');
                        select.find('option:contains(' + li.text() + ')').prop('selected', true);
                    }, 500);
                });
                setTimeout(function() {
                    if(li.prev().is(':last-child')) {
                        li.prev().removeClass('beforeRemove');
                    }
                    if(li.next().is(':first-child')) {
                        li.next().removeClass('afterRemove');
                    }
                    setTimeout(function() {
                        li.prev().removeClass('beforeRemove');
                        li.next().removeClass('afterRemove');
                    }, 200);

                    li.slideUp(400, function() {
                        li.remove();
                        select.removeClass('clicked');
                    });
                }, 600);
            }
        });

        $(document).on('click', '.selectMultiple > div a', function(e) {
            var select = $(this).parent().parent();
            var self = $(this);
            self.removeClass().addClass('remove');
            select.addClass('open');
            setTimeout(function() {
                self.addClass('disappear');
                setTimeout(function() {
                    self.animate({
                        width: 0,
                        height: 0,
                        padding: 0,
                        margin: 0
                    }, 300, function() {
                        var li = $('<li />').text(self.children('em').text()).addClass('notShown').appendTo(select.find('ul'));
                        li.slideDown(400, function() {
                            li.addClass('show');
                            setTimeout(function() {
                                select.find('option:contains(' + self.children('em').text() + ')').prop('selected', false);
                                if(!select.find('option:selected').length) {
                                    select.children('div').children('span').removeClass('hide');
                                }
                                li.removeClass();
                            }, 400);
                        });
                        self.remove();
                    })
                }, 300);
            }, 400);
        });

        $(document).on('click', '.selectMultiple > div .arrow, .selectMultiple > div span', function(e) {
            $(this).parent().parent().toggleClass('open');
        });
    });
    $("#CapitalsSettings").click(function(){

        if (CapitalsExecuted) {void(0)}
        else{
            CapitalsExecuted = true;
            var select = $('#CapitalsSelect');
            var options = select.find('option');

            var div = $('<div />').addClass('selectMultiple');
            var active = $('<div />');
            var list = $('<ul />');
            var placeholder = select.data('placeholder');

            var span = $('<span />').text(placeholder).appendTo(active);

            options.each(function() {
                var text = $(this).text();
                if($(this).is(':selected')) {
                    active.append($('<a />').html('<em>' + text + '</em><i></i>'));
                    span.addClass('hide');
                } else {
                    list.append($('<li />').html(text));
                }
            });

            active.append($('<div />').addClass('arrow'));
            div.append(active).append(list);

            select.wrap(div);
            }

        $(document).on('click', '.selectMultiple ul li', function(e) {
            var select = $(this).parent().parent();
            var li = $(this);
            if(!select.hasClass('clicked')) {
                select.addClass('clicked');
                li.prev().addClass('beforeRemove');
                li.next().addClass('afterRemove');
                li.addClass('remove');
                var a = $('<a />').addClass('notShown').html('<em>' + li.text() + '</em><i></i>').hide().appendTo(select.children('div'));
                a.slideDown(400, function() {
                    setTimeout(function() {
                        a.addClass('shown');
                        select.children('div').children('span').addClass('hide');
                        select.find('option:contains(' + li.text() + ')').prop('selected', true);
                    }, 500);
                });
                setTimeout(function() {
                    if(li.prev().is(':last-child')) {
                        li.prev().removeClass('beforeRemove');
                    }
                    if(li.next().is(':first-child')) {
                        li.next().removeClass('afterRemove');
                    }
                    setTimeout(function() {
                        li.prev().removeClass('beforeRemove');
                        li.next().removeClass('afterRemove');
                    }, 200);

                    li.slideUp(400, function() {
                        li.remove();
                        select.removeClass('clicked');
                    });
                }, 600);
            }
        });

        $(document).on('click', '.selectMultiple > div a', function(e) {
            var select = $(this).parent().parent();
            var self = $(this);
            self.removeClass().addClass('remove');
            select.addClass('open');
            setTimeout(function() {
                self.addClass('disappear');
                setTimeout(function() {
                    self.animate({
                        width: 0,
                        height: 0,
                        padding: 0,
                        margin: 0
                    }, 300, function() {
                        var li = $('<li />').text(self.children('em').text()).addClass('notShown').appendTo(select.find('ul'));
                        li.slideDown(400, function() {
                            li.addClass('show');
                            setTimeout(function() {
                                select.find('option:contains(' + self.children('em').text() + ')').prop('selected', false);
                                if(!select.find('option:selected').length) {
                                    select.children('div').children('span').removeClass('hide');
                                }
                                li.removeClass();
                            }, 400);
                        });
                        self.remove();
                    })
                }, 300);
            }, 400);
        });

        $(document).on('click', '.selectMultiple > div .arrow, .selectMultiple > div span', function(e) {
            $(this).parent().parent().toggleClass('open');
        });
    });
    $("#EmojisSettings").click(function(){

        if (EmojisExecuted) {void(0)}
        else{
            EmojisExecuted = true;
            var select = $('#EmojisSelect');
            var options = select.find('option');

            var div = $('<div />').addClass('selectMultiple');
            var active = $('<div />');
            var list = $('<ul />');
            var placeholder = select.data('placeholder');

            var span = $('<span />').text(placeholder).appendTo(active);

            options.each(function() {
                var text = $(this).text();
                if($(this).is(':selected')) {
                    active.append($('<a />').html('<em>' + text + '</em><i></i>'));
                    span.addClass('hide');
                } else {
                    list.append($('<li />').html(text));
                }
            });

            active.append($('<div />').addClass('arrow'));
            div.append(active).append(list);

            select.wrap(div);
            }

        $(document).on('click', '.selectMultiple ul li', function(e) {
            var select = $(this).parent().parent();
            var li = $(this);
            if(!select.hasClass('clicked')) {
                select.addClass('clicked');
                li.prev().addClass('beforeRemove');
                li.next().addClass('afterRemove');
                li.addClass('remove');
                var a = $('<a />').addClass('notShown').html('<em>' + li.text() + '</em><i></i>').hide().appendTo(select.children('div'));
                a.slideDown(400, function() {
                    setTimeout(function() {
                        a.addClass('shown');
                        select.children('div').children('span').addClass('hide');
                        select.find('option:contains(' + li.text() + ')').prop('selected', true);
                    }, 500);
                });
                setTimeout(function() {
                    if(li.prev().is(':last-child')) {
                        li.prev().removeClass('beforeRemove');
                    }
                    if(li.next().is(':first-child')) {
                        li.next().removeClass('afterRemove');
                    }
                    setTimeout(function() {
                        li.prev().removeClass('beforeRemove');
                        li.next().removeClass('afterRemove');
                    }, 200);

                    li.slideUp(400, function() {
                        li.remove();
                        select.removeClass('clicked');
                    });
                }, 600);
            }
        });

        $(document).on('click', '.selectMultiple > div a', function(e) {
            var select = $(this).parent().parent();
            var self = $(this);
            self.removeClass().addClass('remove');
            select.addClass('open');
            setTimeout(function() {
                self.addClass('disappear');
                setTimeout(function() {
                    self.animate({
                        width: 0,
                        height: 0,
                        padding: 0,
                        margin: 0
                    }, 300, function() {
                        var li = $('<li />').text(self.children('em').text()).addClass('notShown').appendTo(select.find('ul'));
                        li.slideDown(400, function() {
                            li.addClass('show');
                            setTimeout(function() {
                                select.find('option:contains(' + self.children('em').text() + ')').prop('selected', false);
                                if(!select.find('option:selected').length) {
                                    select.children('div').children('span').removeClass('hide');
                                }
                                li.removeClass();
                            }, 400);
                        });
                        self.remove();
                    })
                }, 300);
            }, 400);
        });

        $(document).on('click', '.selectMultiple > div .arrow, .selectMultiple > div span', function(e) {
            $(this).parent().parent().toggleClass('open');
        });
    });
    $("#InvitesSettings").click(function(){

        if (InvitesExecuted) {void(0)}
        else{
            InvitesExecuted = true;
            var select = $('#InvitesSelect');
            var options = select.find('option');

            var div = $('<div />').addClass('selectMultiple');
            var active = $('<div />');
            var list = $('<ul />');
            var placeholder = select.data('placeholder');

            var span = $('<span />').text(placeholder).appendTo(active);

            options.each(function() {
                var text = $(this).text();
                if($(this).is(':selected')) {
                    active.append($('<a />').html('<em>' + text + '</em><i></i>'));
                    span.addClass('hide');
                } else {
                    list.append($('<li />').html(text));
                }
            });

            active.append($('<div />').addClass('arrow'));
            div.append(active).append(list);

            select.wrap(div);
            }

        $(document).on('click', '.selectMultiple ul li', function(e) {
            var select = $(this).parent().parent();
            var li = $(this);
            if(!select.hasClass('clicked')) {
                select.addClass('clicked');
                li.prev().addClass('beforeRemove');
                li.next().addClass('afterRemove');
                li.addClass('remove');
                var a = $('<a />').addClass('notShown').html('<em>' + li.text() + '</em><i></i>').hide().appendTo(select.children('div'));
                a.slideDown(400, function() {
                    setTimeout(function() {
                        a.addClass('shown');
                        select.children('div').children('span').addClass('hide');
                        select.find('option:contains(' + li.text() + ')').prop('selected', true);
                    }, 500);
                });
                setTimeout(function() {
                    if(li.prev().is(':last-child')) {
                        li.prev().removeClass('beforeRemove');
                    }
                    if(li.next().is(':first-child')) {
                        li.next().removeClass('afterRemove');
                    }
                    setTimeout(function() {
                        li.prev().removeClass('beforeRemove');
                        li.next().removeClass('afterRemove');
                    }, 200);

                    li.slideUp(400, function() {
                        li.remove();
                        select.removeClass('clicked');
                    });
                }, 600);
            }
        });

        $(document).on('click', '.selectMultiple > div a', function(e) {
            var select = $(this).parent().parent();
            var self = $(this);
            self.removeClass().addClass('remove');
            select.addClass('open');
            setTimeout(function() {
                self.addClass('disappear');
                setTimeout(function() {
                    self.animate({
                        width: 0,
                        height: 0,
                        padding: 0,
                        margin: 0
                    }, 300, function() {
                        var li = $('<li />').text(self.children('em').text()).addClass('notShown').appendTo(select.find('ul'));
                        li.slideDown(400, function() {
                            li.addClass('show');
                            setTimeout(function() {
                                select.find('option:contains(' + self.children('em').text() + ')').prop('selected', false);
                                if(!select.find('option:selected').length) {
                                    select.children('div').children('span').removeClass('hide');
                                }
                                li.removeClass();
                            }, 400);
                        });
                        self.remove();
                    })
                }, 300);
            }, 400);
        });

        $(document).on('click', '.selectMultiple > div .arrow, .selectMultiple > div span', function(e) {
            $(this).parent().parent().toggleClass('open');
        });
    });
    $("#SwearingSettings").click(function(){

        if (SwearingExecuted) {void(0)}
        else{
            SwearingExecuted = true;
            var select = $('#SwearingSelect');
            var options = select.find('option');

            var div = $('<div />').addClass('selectMultiple');
            var active = $('<div />');
            var list = $('<ul />');
            var placeholder = select.data('placeholder');

            var span = $('<span />').text(placeholder).appendTo(active);

            options.each(function() {
                var text = $(this).text();
                if($(this).is(':selected')) {
                    active.append($('<a />').html('<em>' + text + '</em><i></i>'));
                    span.addClass('hide');
                } else {
                    list.append($('<li />').html(text));
                }
            });

            active.append($('<div />').addClass('arrow'));
            div.append(active).append(list);

            select.wrap(div);
            }
        $(document).on('click', '.selectMultiple ul li', function(e) {
            var select = $(this).parent().parent();
            var li = $(this);
            if(!select.hasClass('clicked')) {
                select.addClass('clicked');
                li.prev().addClass('beforeRemove');
                li.next().addClass('afterRemove');
                li.addClass('remove');
                var a = $('<a />').addClass('notShown').html('<em>' + li.text() + '</em><i></i>').hide().appendTo(select.children('div'));
                a.slideDown(400, function() {
                    setTimeout(function() {
                        a.addClass('shown');
                        select.children('div').children('span').addClass('hide');
                        select.find('option:contains(' + li.text() + ')').prop('selected', true);
                    }, 500);
                });
                setTimeout(function() {
                    if(li.prev().is(':last-child')) {
                        li.prev().removeClass('beforeRemove');
                    }
                    if(li.next().is(':first-child')) {
                        li.next().removeClass('afterRemove');
                    }
                    setTimeout(function() {
                        li.prev().removeClass('beforeRemove');
                        li.next().removeClass('afterRemove');
                    }, 200);

                    li.slideUp(400, function() {
                        li.remove();
                        select.removeClass('clicked');
                    });
                }, 600);
            }
        });

        $(document).on('click', '.selectMultiple > div a', function(e) {
            var select = $(this).parent().parent();
            var self = $(this);
            self.removeClass().addClass('remove');
            select.addClass('open');
            setTimeout(function() {
                self.addClass('disappear');
                setTimeout(function() {
                    self.animate({
                        width: 0,
                        height: 0,
                        padding: 0,
                        margin: 0
                    }, 300, function() {
                        var li = $('<li />').text(self.children('em').text()).addClass('notShown').appendTo(select.find('ul'));
                        li.slideDown(400, function() {
                            li.addClass('show');
                            setTimeout(function() {
                                select.find('option:contains(' + self.children('em').text() + ')').prop('selected', false);
                                if(!select.find('option:selected').length) {
                                    select.children('div').children('span').removeClass('hide');
                                }
                                li.removeClass();
                            }, 400);
                        });
                        self.remove();
                    })
                }, 300);
            }, 400);
        });

        $(document).on('click', '.selectMultiple > div .arrow, .selectMultiple > div span', function(e) {
            $(this).parent().parent().toggleClass('open');
        });
    });
    $("#SpamSettings").click(function(){
        if (SpamExecuted) {void(0)}
        else{
            SpamExecuted = true;
            var select = $('#SpamSelect');
            var options = select.find('option');

            var div = $('<div />').addClass('selectMultiple');
            var active = $('<div />');
            var list = $('<ul />');
            var placeholder = select.data('placeholder');

            var span = $('<span />').text(placeholder).appendTo(active);

            options.each(function() {
                var text = $(this).text();
                if($(this).is(':selected')) {
                    active.append($('<a />').html('<em>' + text + '</em><i></i>'));
                    span.addClass('hide');
                } else {
                    list.append($('<li />').html(text));
                }
            });

            active.append($('<div />').addClass('arrow'));
            div.append(active).append(list);

            select.wrap(div);
            }

        $(document).on('click', '.selectMultiple ul li', function(e) {
            var select = $(this).parent().parent();
            var li = $(this);
            if(!select.hasClass('clicked')) {
                select.addClass('clicked');
                li.prev().addClass('beforeRemove');
                li.next().addClass('afterRemove');
                li.addClass('remove');
                var a = $('<a />').addClass('notShown').html('<em>' + li.text() + '</em><i></i>').hide().appendTo(select.children('div'));
                a.slideDown(400, function() {
                    setTimeout(function() {
                        a.addClass('shown');
                        select.children('div').children('span').addClass('hide');
                        select.find('option:contains(' + li.text() + ')').prop('selected', true);
                    }, 500);
                });
                setTimeout(function() {
                    if(li.prev().is(':last-child')) {
                        li.prev().removeClass('beforeRemove');
                    }
                    if(li.next().is(':first-child')) {
                        li.next().removeClass('afterRemove');
                    }
                    setTimeout(function() {
                        li.prev().removeClass('beforeRemove');
                        li.next().removeClass('afterRemove');
                    }, 200);

                    li.slideUp(400, function() {
                        li.remove();
                        select.removeClass('clicked');
                    });
                }, 600);
            }
        });

        $(document).on('click', '.selectMultiple > div a', function(e) {
            var select = $(this).parent().parent();
            var self = $(this);
            self.removeClass().addClass('remove');
            select.addClass('open');
            setTimeout(function() {
                self.addClass('disappear');
                setTimeout(function() {
                    self.animate({
                        width: 0,
                        height: 0,
                        padding: 0,
                        margin: 0
                    }, 300, function() {
                        var li = $('<li />').text(self.children('em').text()).addClass('notShown').appendTo(select.find('ul'));
                        li.slideDown(400, function() {
                            li.addClass('show');
                            setTimeout(function() {
                                select.find('option:contains(' + self.children('em').text() + ')').prop('selected', false);
                                if(!select.find('option:selected').length) {
                                    select.children('div').children('span').removeClass('hide');
                                }
                                li.removeClass();
                            }, 400);
                        });
                        self.remove();
                    })
                }, 300);
            }, 400);
        });

        $(document).on('click', '.selectMultiple > div .arrow, .selectMultiple > div span', function(e) {
            $(this).parent().parent().toggleClass('open');
        });
    });
    $("#FilesSettings").click(function(){
        if (FilesExecuted) {void(0)}
        else{
            FilesExecuted = true;
            var select = $('#FilesSelect');
            var options = select.find('option');

            var div = $('<div />').addClass('selectMultiple');
            var active = $('<div />');
            var list = $('<ul />');
            var placeholder = select.data('placeholder');

            var span = $('<span />').text(placeholder).appendTo(active);

            options.each(function() {
                var text = $(this).text();
                if($(this).is(':selected')) {
                    active.append($('<a />').html('<em>' + text + '</em><i></i>'));
                    span.addClass('hide');
                } else {
                    list.append($('<li />').html(text));
                }
            });

            active.append($('<div />').addClass('arrow'));
            div.append(active).append(list);

            select.wrap(div);
            }
        $(document).on('click', '.selectMultiple ul li', function(e) {
            var select = $(this).parent().parent();
            var li = $(this);
            if(!select.hasClass('clicked')) {
                select.addClass('clicked');
                li.prev().addClass('beforeRemove');
                li.next().addClass('afterRemove');
                li.addClass('remove');
                var a = $('<a />').addClass('notShown').html('<em>' + li.text() + '</em><i></i>').hide().appendTo(select.children('div'));
                a.slideDown(400, function() {
                    setTimeout(function() {
                        a.addClass('shown');
                        select.children('div').children('span').addClass('hide');
                        select.find('option:contains(' + li.text() + ')').prop('selected', true);
                    }, 500);
                });
                setTimeout(function() {
                    if(li.prev().is(':last-child')) {
                        li.prev().removeClass('beforeRemove');
                    }
                    if(li.next().is(':first-child')) {
                        li.next().removeClass('afterRemove');
                    }
                    setTimeout(function() {
                        li.prev().removeClass('beforeRemove');
                        li.next().removeClass('afterRemove');
                    }, 200);

                    li.slideUp(400, function() {
                        li.remove();
                        select.removeClass('clicked');
                    });
                }, 600);
            }
        });

        $(document).on('click', '.selectMultiple > div a', function(e) {
            var select = $(this).parent().parent();
            var self = $(this);
            self.removeClass().addClass('remove');
            select.addClass('open');
            setTimeout(function() {
                self.addClass('disappear');
                setTimeout(function() {
                    self.animate({
                        width: 0,
                        height: 0,
                        padding: 0,
                        margin: 0
                    }, 300, function() {
                        var li = $('<li />').text(self.children('em').text()).addClass('notShown').appendTo(select.find('ul'));
                        li.slideDown(400, function() {
                            li.addClass('show');
                            setTimeout(function() {
                                select.find('option:contains(' + self.children('em').text() + ')').prop('selected', false);
                                if(!select.find('option:selected').length) {
                                    select.children('div').children('span').removeClass('hide');
                                }
                                li.removeClass();
                            }, 400);
                        });
                        self.remove();
                    })
                }, 300);
            }, 400);
        });

        $(document).on('click', '.selectMultiple > div .arrow, .selectMultiple > div span', function(e) {
            $(this).parent().parent().toggleClass('open');
        });
    });
    $("#SpoilersSettings").click(function(){
        if (SpoilersExecuted) {void(0)}
        else{
            SpoilersExecuted = true;
            var select = $('#SpoilersSelect');
            var options = select.find('option');

            var div = $('<div />').addClass('selectMultiple');
            var active = $('<div />');
            var list = $('<ul />');
            var placeholder = select.data('placeholder');

            var span = $('<span />').text(placeholder).appendTo(active);

            options.each(function() {
                var text = $(this).text();
                if($(this).is(':selected')) {
                    active.append($('<a />').html('<em>' + text + '</em><i></i>'));
                    span.addClass('hide');
                } else {
                    list.append($('<li />').html(text));
                }
            });

            active.append($('<div />').addClass('arrow'));
            div.append(active).append(list);

            select.wrap(div);
            }
        $(document).on('click', '.selectMultiple ul li', function(e) {
            var select = $(this).parent().parent();
            var li = $(this);
            if(!select.hasClass('clicked')) {
                select.addClass('clicked');
                li.prev().addClass('beforeRemove');
                li.next().addClass('afterRemove');
                li.addClass('remove');
                var a = $('<a />').addClass('notShown').html('<em>' + li.text() + '</em><i></i>').hide().appendTo(select.children('div'));
                a.slideDown(400, function() {
                    setTimeout(function() {
                        a.addClass('shown');
                        select.children('div').children('span').addClass('hide');
                        select.find('option:contains(' + li.text() + ')').prop('selected', true);
                    }, 500);
                });
                setTimeout(function() {
                    if(li.prev().is(':last-child')) {
                        li.prev().removeClass('beforeRemove');
                    }
                    if(li.next().is(':first-child')) {
                        li.next().removeClass('afterRemove');
                    }
                    setTimeout(function() {
                        li.prev().removeClass('beforeRemove');
                        li.next().removeClass('afterRemove');
                    }, 200);

                    li.slideUp(400, function() {
                        li.remove();
                        select.removeClass('clicked');
                    });
                }, 600);
            }
        });

        $(document).on('click', '.selectMultiple > div a', function(e) {
            var select = $(this).parent().parent();
            var self = $(this);
            self.removeClass().addClass('remove');
            select.addClass('open');
            setTimeout(function() {
                self.addClass('disappear');
                setTimeout(function() {
                    self.animate({
                        width: 0,
                        height: 0,
                        padding: 0,
                        margin: 0
                    }, 300, function() {
                        var li = $('<li />').text(self.children('em').text()).addClass('notShown').appendTo(select.find('ul'));
                        li.slideDown(400, function() {
                            li.addClass('show');
                            setTimeout(function() {
                                select.find('option:contains(' + self.children('em').text() + ')').prop('selected', false);
                                if(!select.find('option:selected').length) {
                                    select.children('div').children('span').removeClass('hide');
                                }
                                li.removeClass();
                            }, 400);
                        });
                        self.remove();
                    })
                }, 300);
            }, 400);
        });

        $(document).on('click', '.selectMultiple > div .arrow, .selectMultiple > div span', function(e) {
            $(this).parent().parent().toggleClass('open');
        });
    });

    if (IgnoredRolesExecuted) {void(0)}
    else{
        console.log("Loading 2")
        IgnoredRolesExecuted = true;
        var select = $('#IgnoredRolesSelect');
        var options = select.find('option');

        var div = $('<div />').addClass('selectMultiple');
        var active = $('<div />');
        var list = $('<ul />');
        var placeholder = select.data('placeholder');

        var span = $('<span />').text(placeholder).appendTo(active);

        options.each(function() {
            var text = $(this).text();
            if($(this).is(':selected')) {
                active.append($('<a />').html('<em>' + text + '</em><i></i>'));
                span.addClass('hide');
            } else {
                list.append($('<li />').html(text));
            }
        });

        active.append($('<div />').addClass('arrow'));
        div.append(active).append(list);

        select.wrap(div);
        }
    $(document).on('click', '.selectMultiple ul li', function(e) {
        var select = $(this).parent().parent();
        var li = $(this);
        if(!select.hasClass('clicked')) {
            select.addClass('clicked');
            li.prev().addClass('beforeRemove');
            li.next().addClass('afterRemove');
            li.addClass('remove');
            var a = $('<a />').addClass('notShown').html('<em>' + li.text() + '</em><i></i>').hide().appendTo(select.children('div'));
            a.slideDown(400, function() {
                setTimeout(function() {
                    a.addClass('shown');
                    select.children('div').children('span').addClass('hide');
                    select.find('option:contains(' + li.text() + ')').prop('selected', true);
                }, 500);
            });
            setTimeout(function() {
                if(li.prev().is(':last-child')) {
                    li.prev().removeClass('beforeRemove');
                }
                if(li.next().is(':first-child')) {
                    li.next().removeClass('afterRemove');
                }
                setTimeout(function() {
                    li.prev().removeClass('beforeRemove');
                    li.next().removeClass('afterRemove');
                }, 200);

                li.slideUp(400, function() {
                    li.remove();
                    select.removeClass('clicked');
                });
            }, 600);
        }
    });

    $(document).on('click', '.selectMultiple > div a', function(e) {
        var select = $(this).parent().parent();
        var self = $(this);
        self.removeClass().addClass('remove');
        select.addClass('open');
        setTimeout(function() {
            self.addClass('disappear');
            setTimeout(function() {
                self.animate({
                    width: 0,
                    height: 0,
                    padding: 0,
                    margin: 0
                }, 300, function() {
                    var li = $('<li />').text(self.children('em').text()).addClass('notShown').appendTo(select.find('ul'));
                    li.slideDown(400, function() {
                        li.addClass('show');
                        setTimeout(function() {
                            select.find('option:contains(' + self.children('em').text() + ')').prop('selected', false);
                            if(!select.find('option:selected').length) {
                                select.children('div').children('span').removeClass('hide');
                            }
                            li.removeClass();
                        }, 400);
                    });
                    self.remove();
                })
            }, 300);
        }, 400);
    });

    $(document).on('click', '.selectMultiple > div .arrow, .selectMultiple > div span', function(e) {
        $(this).parent().parent().toggleClass('open');
    });
});

